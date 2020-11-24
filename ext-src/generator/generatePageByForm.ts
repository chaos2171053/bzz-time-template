import * as vscode from "vscode";
import * as path from "path";
import * as cheerio from "cheerio";
import { readFileSync } from "fs-extra";

interface GeneratePageByFormProps {
  outputPath: string;
  context: vscode.ExtensionContext;
}

class GeneratePageByForm {
  private outputPath: string;
  private readonly extensionPath: string;
  private static currentPanel: vscode.WebviewPanel | undefined = undefined;
  private static readonly webviewBuildPath = "webview-react/build";
  private static context: vscode.ExtensionContext;

  public constructor({ outputPath, context }: GeneratePageByFormProps) {
    this.outputPath = outputPath;
    this.extensionPath = context.extensionPath;
    GeneratePageByForm.context = context;
    this.init();
  }

  public init() {
    this.createOrShow();
  }

  public async createOrShow() {
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    const extensionPath = this.extensionPath;

    const context = GeneratePageByForm.context;

    // // make sure only one webview
    if (GeneratePageByForm.currentPanel) {
      GeneratePageByForm.currentPanel.reveal(columnToShowIn);
      return;
    }

    // this.extensionPath = extensionPath;

    GeneratePageByForm.currentPanel = vscode.window.createWebviewPanel(
      "GeneratePageByForm",
      "表单配置页面",
      columnToShowIn ? columnToShowIn : vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        // only load webview-react/build`s content
        localResourceRoots: [
          vscode.Uri.file(
            path.join(extensionPath, GeneratePageByForm.webviewBuildPath)
          ),
        ],
      }
    );

    // insert html content into webview
    GeneratePageByForm.currentPanel.webview.html = await this.getHtmlForWebview();

    GeneratePageByForm.currentPanel.onDidDispose(
      async () => {
        GeneratePageByForm.currentPanel = undefined;
      },
      null,
      []
    );

    // get message from webview
    GeneratePageByForm.currentPanel.webview.onDidReceiveMessage(
      (message) => {
        console.log("get message from webview", message);
        switch (message.command) {
          case "generatePageByForm":
            vscode.window.showErrorMessage(message.data);
            return;
          default:
            return;
        }
      },
      undefined,
      context.subscriptions
    );
  }

  private async getHtmlForWebview() {
    const extensionPath = this.extensionPath;

    const webviewBuildPath = GeneratePageByForm.webviewBuildPath;

    let htmlContent = await readFileSync(
      path.join(extensionPath, `${webviewBuildPath}/index.html`),
      "utf8"
    ).toString();

    const $ = cheerio.load(htmlContent, { xmlMode: false });

    // replace manifest
    $('link[rel="manifest"]')
      .toArray()
      .forEach((item) => {
        const manifestScr = $(item).attr("href") || "";

        const manifesUri = vscode.Uri.file(
          path.join(extensionPath, webviewBuildPath, manifestScr)
        ).with({ scheme: "vscode-resource" });

        $(item).attr("href", `${manifesUri}`);
      });

    // replace script src
    $("script[src]")
      .toArray()
      .forEach((item) => {
        const scriptScr = $(item).attr("src") || "";

        const scriptUri = vscode.Uri.file(
          path.join(extensionPath, webviewBuildPath, scriptScr)
        ).with({ scheme: "vscode-resource" });

        $(item).attr("src", `${scriptUri}`);
      });

    // replace style href
    $('link[rel="stylesheet"]')
      .toArray()
      .forEach((item) => {
        const styleLink = $(item).attr("href") || "";
        const styleUri = vscode.Uri.file(
          path.join(extensionPath, webviewBuildPath, styleLink)
        ).with({ scheme: "vscode-resource" });

        $(item).attr("href", `${styleUri}`);
      });

    htmlContent = $.html();

    return htmlContent;
  }
}

export default GeneratePageByForm;

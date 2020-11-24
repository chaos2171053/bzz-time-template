import * as vscode from "vscode";
import * as path from "path";
import * as fse from "fs-extra";
import * as cheerio from "cheerio";
import { readFileSync } from "fs-extra";

interface GeneratePageByFormProps {
  outputPath: string;
  extensionPath: string;
}

class GeneratePageByForm {
  // private readonly _panel: vscode.WebviewPanel;
  // private readonly extensionPath: string;
  private _disposables: vscode.Disposable[] = [];
  private outputPath: string;
  private readonly extensionPath: string;
  private static currentPanel: vscode.WebviewPanel | undefined = undefined;
  private static readonly webviewBuildPath = "webview-react/build";

  public constructor({ outputPath, extensionPath }: GeneratePageByFormProps) {
    this.outputPath = outputPath;
    this.extensionPath = extensionPath;
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

    // // 确保只有一个 webview
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

    console.log(htmlContent);

    return htmlContent;
  }
}

function getNonce() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default GeneratePageByForm;

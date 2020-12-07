import * as vscode from "vscode";
import * as path from "path";
import * as cheerio from "cheerio";
import { readFileSync } from "fs-extra";
import createDirectory from "./createDirectory";
import CreateTemplate from "./createTemplate";
import replaceComponentName from "./replaceComponentName";
import generateDataSet from "./generateDataSet";
import repalceTableColumn from "./repalceTableColumn";

interface GeneratePageByFormProps {
  uri: vscode.Uri;
  context: vscode.ExtensionContext;
}

class GeneratePageByForm {
  private outputPath: string;
  private uri: vscode.Uri;
  private readonly extensionPath: string;
  private static currentPanel: vscode.WebviewPanel | undefined = undefined;
  private static readonly webviewBuildPath = "webview-react/build";
  private static context: vscode.ExtensionContext;

  public constructor({ uri, context }: GeneratePageByFormProps) {
    this.uri = uri;
    this.outputPath = uri.path;
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

    GeneratePageByForm.currentPanel.webview.postMessage({
      command: "route",
      data: {
        url: "list",
        data: {
          message: "generate",
        },
      },
    });

    GeneratePageByForm.currentPanel.onDidDispose(
      async () => {
        GeneratePageByForm.currentPanel = undefined;
      },
      null,
      []
    );

    // get message from webview
    GeneratePageByForm.currentPanel.webview.onDidReceiveMessage(
      async (message) => {
        console.log("get message from webview", message);
        const { command, data } = message;
        switch (command) {
          case "generatePageByForm":
            try {
              await this.generate(data);
              this.showGenerateProcess({
                message: "success",
              });
              setTimeout(() => {
                // pragmatically close the webview panel
                GeneratePageByForm?.currentPanel?.dispose();
              }, 1500);
            } catch (error) {
              this.showGenerateProcess({ message: error });
            }
            return;
          default:
            return;
        }
      },
      undefined,
      context.subscriptions
    );
  }

  private showGenerateProcess({ message }: { message?: string }) {
    GeneratePageByForm?.currentPanel?.webview.postMessage({
      command: "generate",
      data: {
        message,
      },
    });
  }

  public async generate(data: any) {
    const { directoryName, listDataSet } = data;
    const pageName = directoryName;
    const pagePath = this.outputPath;
    const extensionPath = this.extensionPath;

    console.log("generate data: ", data);

    try {
      // create page directory
      const pageDir = createDirectory(pagePath, pageName);

      // create page route index.js
      new CreateTemplate({
        filePath: pageDir,
        fileName: "index.js",
        templateName: "route.js",
        extensionPath,
      });

      // create list directory in page directory
      const listDir = createDirectory(pageDir, "list");

      // create page`s StoreProvider
      new CreateTemplate({
        filePath: listDir,
        fileName: "index.js",
        templateName: "PageStoreProvider.js",
        extensionPath,
      });

      // create page`s list
      new CreateTemplate({
        filePath: listDir,
        fileName: "List.js",
        templateName: "ListComponent.js",
        extensionPath,
        replaceContentCallback: (fileContent: string) =>
          repalceTableColumn(fileContent, listDataSet),
      });

      const styleDir = createDirectory(listDir, "styles");

      // create styles/List.less
      new CreateTemplate({
        filePath: styleDir,
        fileName: "List.less",
        templateName: "ComponentName.less",
        extensionPath,
      });

      // create styles/CreateModal.less.less
      new CreateTemplate({
        filePath: styleDir,
        fileName: "CreateModal.less",
        templateName: "ComponentName.less",
        extensionPath,
      });

      // create components directory
      const componentsDir = createDirectory(listDir, "components");

      // create modal directory
      const modalDir = createDirectory(listDir, "modal");
      // create modal comonent
      new CreateTemplate({
        filePath: modalDir,
        fileName: "CreateModal.js",
        templateName: "ComponentName.js",
        replaceContentCallback: replaceComponentName,
        extensionPath,
      });

      // create stores directory
      const storesDir = createDirectory(listDir, "stores");

      // create add modal`s dataset
      new CreateTemplate({
        filePath: storesDir,
        fileName: "CreateDataSet.js",
        templateName: "CreateDataSet.js",
        extensionPath,
      });

      // create list`s index store
      new CreateTemplate({
        filePath: storesDir,
        fileName: "index.js",
        templateName: "IndexStore.js",
        extensionPath,
      });

      // create listdataset
      new CreateTemplate({
        filePath: storesDir,
        fileName: "ListDataSet.js",
        templateName: "ListDaSet.js",
        extensionPath,
        replaceContentCallback: (fileContent: any) => {
          return this.replaceListDataSet(fileContent, listDataSet);
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  public replaceListDataSet(fileContent: any, listDataSet: Object) {
    fileContent = generateDataSet(listDataSet);
    return fileContent;
  }

  public async getHtmlForWebview() {
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

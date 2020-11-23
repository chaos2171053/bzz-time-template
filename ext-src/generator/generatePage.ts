import * as vscode from "vscode";
import message from "../utils/message";
import createDirectory from "./createDirectory";
import CreateTemplate from "./createTemplate";

interface GeneratePageProps {
  uri: vscode.Uri;
  extensionPath: string;
}

class GeneratePage {
  pageName: string = "";
  uri;
  extensionPath: string;
  constructor({ uri, extensionPath }: GeneratePageProps) {
    this.uri = uri;
    this.extensionPath = extensionPath;
    this.init();
  }
  /**
   * init
   */
  public async init() {
    const pagePath = this.uri.path;

    const extensionPath = this.extensionPath;

    let pageName = await vscode.window.showInputBox({
      prompt: "请输入页面名称.",
    });

    if (!pageName || pageName.length === 0) {
      message("error", "页面名不能为空");
      throw new Error("Page name can not be empty");
    }

    this.pageName = pageName.replace(/[^A-Za-z]/g, "");

    console.log("Generate Page name: ", this.pageName);
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
      });

      const styleDir = createDirectory(listDir, "styles");

      // create styles/List.less
      new CreateTemplate({
        filePath: styleDir,
        fileName: "List.less",
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
        replaceFileName: true,
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
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default GeneratePage;

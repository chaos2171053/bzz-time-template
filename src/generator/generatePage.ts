import * as vscode from "vscode";
import message from "../utils/message";
import createDir from "./createDir";
import CreateTemplate from "./createTemplate";
class GeneratePage {
  pageName: string = "";
  uri;
  constructor(uri:vscode.Uri){
    this.uri = uri;
    this.init();
  }
  /**
   * init
   */
  public async init() {
    const pagePath  = this.uri.path;
    let pageName = await vscode.window.showInputBox({
      prompt: "请输入页面名称.",
    });

    if (!pageName || pageName.length === 0) {
      message("error", "页面名不能为空");
      throw new Error("Page name can not be empty");
    }

    this.pageName = pageName.replace(/[^A-Za-z]/g, "");

    console.log('Generate Page name: ', this.pageName);
    try {
      // create page directory
      const pageDir = createDir(pagePath, pageName);

      // create page route index.js
      new CreateTemplate({
        filePath:pageDir,
        fileName:'index.js',
        templateName:'route.js'
      });

      // create list directory in page directory
      const listDir = createDir(pageDir, 'list');

      // create page`s StoreProvider
      new CreateTemplate({
        filePath:listDir,
        fileName:'index.js',
        templateName:'PageStoreProvider.js',
      });

      // create page`s list
      new CreateTemplate({
        filePath:listDir,
        fileName:'List.js',
        templateName:'ListComponent.js',
      });

    } catch (error) {
      throw new Error(error);
      
    }

  }

}

export default GeneratePage;
import * as vscode from "vscode";
import * as fse from "fs-extra";
import message from "./utils/message";
import  generateComponent from './generator/generateComponent';

async function main(uri: vscode.Uri) {
  const { path } = uri;

  console.log("Work path :", path);

  if (!uri || !path || !fse.statSync(path).isDirectory()) {
    message("error", "请选择要生成模版的目录");
    return false;
  }

  const templateType = await vscode.window.showQuickPick(["页面", "组件"], {
    placeHolder: "请选择模版类型",
  });

  console.log("User select templateType: ", templateType);

  switch (templateType) {
    case "页面":
      message("warning", "Sorry，努力开发中 ^_^");
      break;
    case "组件":
      new generateComponent(uri);
      break;
    default:
      break;
  }
}
export default main;

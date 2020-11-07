import * as vscode from "vscode";
import * as fs from "fs";
import { window } from "vscode";
import message from "./utils/message";

async function main(uri: vscode.Uri) {
  const { path } = uri;
  console.log("path :", path);
  if (!uri || !path || !fs.statSync(path).isDirectory()) {
    message("error", "请选择要生成模版的目录");
    return false;
  }
  const templateType = await window.showQuickPick(["页面", "组件"], {
    placeHolder: "请选择模版类型",
  });
  console.log("User select templateType: ", templateType);
  switch (templateType) {
    case "页面":
      message("warning","Sorry，正在努力开发中 ^_^");
      break;
    case "组件":
      break;
    default:
      break;
  }
}
export default main;

import * as vscode from "vscode";
import * as fs from "fs";
import { window } from "vscode";
import message from "./utils/message";
import CreateComponent from "./generator/CreateComponent";
async function main(uri: vscode.Uri) {
  const { path } = uri;

  console.log("Work path :", path);

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
      message("warning", "Sorry，努力开发中 ^_^");
      break;
    case "组件":
      let componentName = await window.showInputBox({
        prompt: "请输入组件名称.",
      });

      if (!componentName || componentName.length === 0) {
        message("error", "组件名不能为空");
        throw new Error("Component name can not be empty");
      }

      componentName = componentName.replace(/[^A-Za-z]/g, "");

      try {
        new CreateComponent(uri, componentName);
        message("success", `创建组件${componentName}成功`);
      } catch (error) {
        message("error", error);
      }

      break;
    default:
      break;
  }
}
export default main;

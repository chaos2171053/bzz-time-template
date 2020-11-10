import * as vscode from "vscode";
import * as fse from "fs-extra";
import message from "./utils/message";
import  GenerateComponent from './generator/generateComponent';
import GeneratePage from './generator/generatePage';

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
      new GeneratePage(uri);
      break;
    case "组件":

      const componentName = await vscode.window.showInputBox({
        prompt: "请输入组件名称.",
      });

      if (!componentName || componentName.length === 0) {
        message("error", "组件名不能为空");
        throw new Error("Component name can not be empty");
      }

      new GenerateComponent(uri,componentName);

      break;
    default:
      break;
  }
}
export default main;

import * as vscode from "vscode";
import * as fse from "fs-extra";
import message from "./utils/message";
import GenerateComponent from "./generator/generateComponent";
import GeneratePage from "./generator/generatePage";
import generatePageByForm from "./generator/generatePageByForm";

async function main(uri: vscode.Uri, context: vscode.ExtensionContext) {
  const { path } = uri;
  if (!uri || !path || !fse.statSync(path).isDirectory()) {
    message("error", "请选择要生成模版的目录");
    return false;
  }

  // 生成模版的方式/类型
  // const quickPick = ["组件", "简化版页面", "通过表单配置页面"];
  const quickPick = ["组件", "简化版页面"];

  const templateType = await vscode.window.showQuickPick(quickPick, {
    placeHolder: "请选择模版类型",
  });

  // 组件开发目录
  const extensionPath = context.extensionPath;

  console.log("User select templateType: ", templateType);

  switch (templateType) {
    case "组件":
      const componentName = await vscode.window.showInputBox({
        prompt: "请输入组件名称.",
      });

      if (!componentName || componentName.length === 0) {
        message("error", "组件名不能为空");
        throw new Error("Component name can not be empty");
      }

      new GenerateComponent({
        outputPath: uri.path,
        componentName,
        extensionPath,
      });
      break;
    case "简化版页面":
      new GeneratePage({
        uri,
        extensionPath,
      });
      break;
    // case "通过表单配置页面":
    //   new generatePageByForm(uri);
    //   break;
    default:
      break;
  }
}
export default main;

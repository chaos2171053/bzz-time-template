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
  const quickPick = ["模版列表页", "表单配置列表页"];

  const templateType = await vscode.window.showQuickPick(quickPick, {
    placeHolder: "请选择模版类型",
  });

  // 组件开发目录
  const extensionPath = context.extensionPath;

  console.log("User select templateType: ", templateType);

  switch (templateType) {
    case "模版列表页":
      let pageName = await vscode.window.showInputBox({
        prompt: "请输入页面名称.",
      });

      if (!pageName || pageName.length === 0) {
        message("error", "页面名不能为空");
        throw new Error("Page name can not be empty");
      }

      console.log("Generate Page name: ", pageName);
      new GeneratePage({
        uri,
        extensionPath,
        pageName,
      });
      break;
    case "表单配置列表页":
      new generatePageByForm({
        uri,
        context,
      });
      break;
    default:
      break;
  }
}
export default main;

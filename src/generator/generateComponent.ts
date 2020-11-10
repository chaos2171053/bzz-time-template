import * as vscode from "vscode";
import message from "../utils/message";
import CreateComponent from "./createComponent";

class GenerateComponent {
  constructor(uri:vscode.Uri){
    this.init(uri);
  }
  /**
   * 创建组件
   */
  public async init(uri:vscode.Uri) {
    let componentName = await vscode.window.showInputBox({
      prompt: "请输入组件名称.",
    });

    if (!componentName || componentName.length === 0) {
      message("error", "组件名不能为空");
      throw new Error("Component name can not be empty");
    }

    componentName = componentName.replace(/[^A-Za-z]/g, "");

    try {
      new CreateComponent(uri, componentName);
    } catch (error) {
      message("error", error);
    }
  }
}
export default GenerateComponent;
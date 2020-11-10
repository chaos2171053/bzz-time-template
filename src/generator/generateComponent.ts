import * as vscode from "vscode";
import firstCharUpper from "../utils/firstCharUpper";
import message from "../utils/message";
import CreateComponent from "./createComponent";
import createDir from './createDir';
import CreateStyle from "./createStyle";
/**
 * 生成 组件名目录/组件名.js + 组件名.less
 */
class GenerateComponent {
  componentName: string = "";
  uri;
  constructor(uri:vscode.Uri){
    this.uri = uri;
    this.init();
  }
  /**
   * 创建组件
   */
  public async init() {
    let componentName = await vscode.window.showInputBox({
      prompt: "请输入组件名称.",
    });
    let newComponent = null;
    let newComponentStyle = null;

    if (!componentName || componentName.length === 0) {
      message("error", "组件名不能为空");
      throw new Error("Component name can not be empty");
    }

    this.componentName = firstCharUpper(componentName.replace(/[^A-Za-z]/g, ""));

    try {
      const componentDir = createDir(this.uri.path, this.componentName);
      newComponent = new CreateComponent(componentDir, this.componentName);
      newComponentStyle = new CreateStyle(componentDir,this.componentName);
    } catch (error) {
      throw new Error(error);
    }
    return {newComponent,newComponentStyle};
  }
}
export default GenerateComponent;
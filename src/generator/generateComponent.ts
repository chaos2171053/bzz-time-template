import * as vscode from "vscode";
import firstCharUpper from "../utils/firstCharUpper";
import createDir from './createDir';
import CreateTemplate from './createTemplate';
/**
 * 生成 组件名目录/组件名.js + 组件名.less
 */
class GenerateComponent {
  componentName: string = "";
  uri;
  constructor(uri:vscode.Uri,componentName:string){
    this.uri = uri;
    this.componentName = firstCharUpper(componentName.replace(/[^A-Za-z]/g, ""));
    this.init();
  }
  /**
   * 创建组件
   */
  public async init() {
    let newComponent = null;
    let newComponentStyle = null;

    try {
      const componentDir = createDir(this.uri.path, this.componentName);
      newComponent = new CreateTemplate({
        filePath:componentDir,
        fileName:`${this.componentName}.js`,
        templateName:'ComponentName.js',
        replaceFileName:true,
      });
      newComponentStyle =  new CreateTemplate({
        filePath:componentDir,
        fileName:`${this.componentName}.less`,
        templateName:'ComponentName.less',
      });
    } catch (error) {
      throw new Error(error);
    }
    return {newComponent,newComponentStyle};
  }
}
export default GenerateComponent;
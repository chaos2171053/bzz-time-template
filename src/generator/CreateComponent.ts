import * as path from "path";
import * as fse from 'fs-extra';
import firstCharUpper from "../utils/firstCharUpper";
import createFile from './createFile';
/**
 * 生成 组件名.js
 */
export default class CreateComponent {
  // 必须把 templates 目录放到项目根目录。否则 templates 下的文件加载时不会被读取到。
  public static assetRootDir: string = path.join(__dirname, "../../templates/ComponentName.js");
  componentName: string = "";
  componentPath: string = "";
  constructor(componentPath:string, componentName: string) {
    this.componentPath = componentPath;
    this.componentName = firstCharUpper(componentName);
    this.init();
  }
  public init () {
    this.createComponentFile();
  }

  public async createComponentFile() {
    let componentJsContent = '';
    let jsFile  = null;
    const componentDir:string = this.componentPath;
    const componentName:string = this.componentName;
    try {
      componentJsContent = fse.readFileSync(CreateComponent.assetRootDir,'utf8').toString(); 
    } catch (error) {
      throw new Error(error);
      
    }
    componentJsContent = componentJsContent.replace(/ComponentName/g,componentName);
    try {
      jsFile = await createFile(`${componentDir}/${componentName}.js`,componentJsContent);
    } catch (error) {
      throw new Error(error);
    }
    return jsFile;
  }
}

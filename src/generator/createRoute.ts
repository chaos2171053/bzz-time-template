import * as path from "path";
import * as fse from 'fs-extra';
import firstCharUpper from "../utils/firstCharUpper";
import createFile from './createFile';
/**
 * 生成页面下路由index.js
 */
export default class CreateRoute {
  // 必须把 templates 目录放到项目根目录。否则 templates 下的文件加载时不会被读取到。
  public static assetRootDir: string = path.join(__dirname, "../../templates/route.js");
  componentName: string = "index";
  componentPath: string = "";
  constructor(componentPath:string) {
    this.componentPath = componentPath;
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
      componentJsContent = fse.readFileSync(CreateRoute.assetRootDir,'utf8').toString(); 
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

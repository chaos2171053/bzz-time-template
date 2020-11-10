import * as path from "path";
import * as fse from 'fs-extra';
import { Uri } from "vscode";
import createDir from "./createDir";
import firstCharUpper from "../utils/firstCharUpper";
import createFile from './createFile';

export default class CreateComponent {
  // 必须把 templates 目录放到项目根目录。否则 templates 下的文件加载时不会被读取到。
  public static assetRootDir: string = path.join(__dirname, "../../templates/ComponentName");
  componentName: string = "";
  uri;
  constructor(uri: Uri, componentName: string) {
    this.uri = uri;
    this.componentName = firstCharUpper(componentName);
    this.init();
   
  }
  public init () {
    const componentDir =  this.createComponentDir();
    this.createComponentFile(componentDir);
  }

  public createComponentDir(): string {
    const componentDir = createDir(this.uri, this.componentName);
    console.log("Create component dirctory :", componentDir);
    return componentDir;
  }
  public async createComponentFile(componentDir:string) {
    let componentJsContent = '';
    let componentStyleContent = '';
    let jsFile  = null;
    let styleFile =null
    try {
      componentJsContent = fse.readFileSync(`${CreateComponent.assetRootDir}.js`,'utf8').toString(); 
      componentStyleContent = fse.readFileSync(`${CreateComponent.assetRootDir}.less`,'utf8').toString();  
    } catch (error) {
      throw new Error(error);
      
    }

    componentJsContent = componentJsContent.replace(/ComponentName/g,this.componentName);
    try {
      jsFile = await createFile(`${componentDir}/${this.componentName}.js`,componentJsContent);
      styleFile = await createFile(`${componentDir}/${this.componentName}.less`,componentStyleContent);
    } catch (error) {
      throw new Error(error);
    }
    return true;
  }
}

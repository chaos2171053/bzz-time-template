import * as path from "path";
import * as fse from 'fs-extra';
import { Uri } from "vscode";
import createDir from "./createDir";
import firstCharUpper from "../utils/firstCharUpper";
import createFile from './createFile';

export default class CreateComponent {
  // 必须把 templates 目录放到项目根目录。否则 templates 下的文件加载时不会被读取到。
  public static assetRootDir: string = path.join(__dirname, "../../templates/ComponentName.js");
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
    let componentContent = '';
    let file  = null;
    try {
      componentContent = fse.readFileSync(CreateComponent.assetRootDir,'utf8').toString();     
    } catch (error) {
      throw new Error(error);
      
    }

    componentContent = componentContent.replace(/ComponentName/g,this.componentName);
    try {
      file = await createFile(`${componentDir}/${this.componentName}.js`,componentContent);
    } catch (error) {
      throw new Error(error);
    }
    return file;
  }
}

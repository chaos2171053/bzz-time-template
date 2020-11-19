import * as path from "path";
import * as fse from 'fs-extra';
import createFile from './createFile';
interface Props {
  fileName:string;
  filePath:string;
  templateName:string;
  replaceFileName?:boolean; // 是否替换文件内容，比如替换组件名
}
/**
 * 生成 模板文件
 */
export default class CreateTemplate {
  fileName: string = "index";
  filePath: string = "";
  templateName:string = "";
  replaceFileName:boolean = false;
  constructor(props:Props) {
    const {
      filePath,
      fileName,
      templateName,
      replaceFileName = false,
    }  = props;
    this.filePath = filePath;
    this.fileName = fileName;
    // 必须把 templates 目录放到项目根目录。否则 templates 下的文件加载时不会被读取到。
    this.templateName = path.join(__dirname, `../../templates/${templateName}`);
    this.replaceFileName = replaceFileName;
    this.init();
  }
  public async init () {
    let fileContent = '';
    let template  = null;
    const componentDir:string = this.filePath;
    const fileName:string = this.fileName;
    try {
      fileContent = fse.readFileSync(this.templateName,'utf8').toString(); 
    } catch (error) {
      throw new Error(error);
      
    }
    if(this.replaceFileName){
      const replaceContent = fileName.split('.')[0];
      fileContent = fileContent.replace(/ComponentName/g,replaceContent);
    }
   
    try {
      template = await createFile(`${componentDir}/${fileName}`,fileContent);
    } catch (error) {
      throw new Error(error);
    }
    return template;
  }
}

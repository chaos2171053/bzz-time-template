import * as path from "path";
import * as fse from "fs-extra";
import createFile from "./createFile";

interface Props {
  fileName: string;
  filePath: string;
  templateName: string;
  replaceFileName?: boolean; // 是否替换文件内容，比如替换组件名
  extensionPath: string;
}
/**
 * 生成 模板文件
 */
export default class CreateTemplate {
  fileName: string = "index";
  filePath: string = "";
  templateName: string = "";
  replaceFileName: boolean = false;
  templatePath: string;

  constructor(props: Props) {
    const {
      filePath,
      fileName,
      templateName,
      replaceFileName = false,
      extensionPath,
    } = props;
    this.filePath = filePath;
    this.fileName = fileName;

    console.log("_extensionPath=====", extensionPath);

    this.templatePath = path.join(extensionPath, `/templates/${templateName}`);

    this.replaceFileName = replaceFileName;

    this.init();
  }
  public async init() {
    let fileContent = "";
    let template = null;
    const componentDir: string = this.filePath;
    const fileName: string = this.fileName;
    try {
      fileContent = await fse
        .readFileSync(this.templatePath, "utf8")
        .toString();
    } catch (error) {
      throw new Error(error);
    }
    if (this.replaceFileName) {
      const replaceContent = fileName.split(".")[0];
      fileContent = fileContent.replace(/ComponentName/g, replaceContent);
    }

    try {
      template = await createFile(`${componentDir}/${fileName}`, fileContent);
    } catch (error) {
      throw new Error(error);
    }
    return template;
  }
}

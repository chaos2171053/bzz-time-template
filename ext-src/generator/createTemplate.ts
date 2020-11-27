import * as path from "path";
import * as fse from "fs-extra";
import createFile from "./createFile";

interface Props {
  fileName: string;
  filePath: string;
  templateName: string;
  extensionPath: string;
  replaceContentCallback?: Function; // 替换内容回调
}
/**
 * 生成 模板文件
 */
export default class CreateTemplate {
  fileName: string = "index";
  filePath: string = "";
  templateName: string = "";
  templatePath: string;
  replaceContentCallback: Function | undefined;

  constructor(props: Props) {
    const {
      filePath,
      fileName,
      templateName,
      extensionPath,
      replaceContentCallback,
    } = props;
    this.filePath = filePath;
    this.fileName = fileName;

    this.templatePath = path.join(extensionPath, `/templates/${templateName}`);

    this.replaceContentCallback = replaceContentCallback;

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
    if (this.replaceContentCallback) {
      fileContent = this.replaceContentCallback(fileContent);
    }

    try {
      template = await createFile(`${componentDir}/${fileName}`, fileContent);
    } catch (error) {
      throw new Error(error);
    }
    return template;
  }
}

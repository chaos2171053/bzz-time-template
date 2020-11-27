import firstCharUpper from "../utils/firstCharUpper";
import replaceComponentName from "../utils/replaceComponentName";
import createDirectory from "./createDirectory";
import CreateTemplate from "./createTemplate";
/**
 * 生成 组件名目录/组件名.js + 组件名.less
 */

interface GenerateComponentProps {
  outputPath: string;
  componentName: string;
  extensionPath: string;
}
class GenerateComponent {
  componentName: string = "";
  outputPath: string = "";
  extensionPath: string = "";
  constructor({
    outputPath,
    componentName,
    extensionPath,
  }: GenerateComponentProps) {
    this.outputPath = outputPath;
    this.extensionPath = extensionPath;
    this.componentName = firstCharUpper(
      componentName.replace(/[^A-Za-z]/g, "")
    );
    this.init();
  }
  /**
   * 创建组件
   */
  public async init() {
    let newComponent = null;
    let newComponentStyle = null;
    const extensionPath = this.extensionPath;

    try {
      const componentDir = createDirectory(this.outputPath, this.componentName);
      newComponent = new CreateTemplate({
        filePath: componentDir,
        fileName: `${this.componentName}.js`,
        templateName: "ComponentName.js",
        replaceContentCallback: replaceComponentName,
        extensionPath,
      });
      newComponentStyle = new CreateTemplate({
        filePath: componentDir,
        fileName: `${this.componentName}.less`,
        templateName: "ComponentName.less",
        extensionPath,
      });
    } catch (error) {
      throw new Error(error);
    }
    return { newComponent, newComponentStyle };
  }
}
export default GenerateComponent;

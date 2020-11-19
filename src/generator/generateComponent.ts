import firstCharUpper from "../utils/firstCharUpper";
import createDirectory from './createDirectory';
import CreateTemplate from './createTemplate';
/**
 * 生成 组件名目录/组件名.js + 组件名.less
 */
class GenerateComponent {
  componentName: string = "";
  outputPath:string="";
  constructor(outputPath:string,componentName:string){
    this.outputPath = outputPath;
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
      const componentDir = createDirectory(this.outputPath, this.componentName);
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
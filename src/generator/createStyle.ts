import * as fse from 'fs-extra';
import * as path from "path";
import createFile from './createFile';
/**
 * 生成 less 文件
 */
 class CreateStyle {
  public static assetRootDir: string = path.join(__dirname, "../../templates/ComponentName.less");
   styleName:string = 'index';
   stylePath :string = '';
   constructor(path:string,styleName = 'index'){
     this.stylePath = path;
     this.styleName = styleName;
     this.init();
   }
   public async init() {
    let styleFile =null;
    let styleContent = '';
    const stylePath = this.stylePath;
    const styleName = this.styleName;
    styleContent = fse.readFileSync(CreateStyle.assetRootDir,'utf8').toString();  
    try {
      styleFile = await createFile(`${stylePath}/${styleName}.less`,styleContent);
    } catch (error) {
      throw new Error(error);
    }
    return styleFile;
   }

}
export default CreateStyle;
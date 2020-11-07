import * as path from "path";
import CreateDir from "./CreateDir";
import { Uri } from "vscode";
import firstCharUpper from "../utils/firstCharUpper";
export default class CreateComponent {
  private static assetRootDir: string = path.join(__dirname, "../../templates");
  componentName: string = "";
  uri;
  constructor(uri: Uri, componentName: string) {
    this.uri = uri;
    this.componentName = firstCharUpper(componentName);
    this.createComponentDir();
  }
  public createComponentDir(): string {
    const componentDir = CreateDir(this.uri, this.componentName);
    console.log("Create component dirctory :", componentDir);
    return componentDir;
  }
}

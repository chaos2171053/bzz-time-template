import { Uri } from "vscode";
import * as fse from "fs-extra";

export default function createDir(uri: Uri, dirName: string): string {
  try {
    const sourcePath = uri.path;
    const targetPath = `${sourcePath}/${dirName}`;
    fse.mkdirsSync(targetPath);
    return targetPath;
  } catch (error) {
    throw new Error(error);
  }
}

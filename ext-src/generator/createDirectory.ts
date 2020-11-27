import * as fse from "fs-extra";

export default function createDirectory(path: string, dirName: string): string {
  const targetPath = `${path}/${dirName}`;
  try {
    const targetPath = `${path}/${dirName}`;
    fse.mkdirsSync(targetPath);
    return targetPath;
  } catch (error) {
    throw new Error(error);
  }
}

import * as fse from "fs-extra";
const createFile = async (file: string, data: string) => {
  const res = await fse
    .outputFile(file, data)
    .then((res) => res)
    .catch((error) => {
      throw new Error(error);
    });
  return res;
};
export default createFile;

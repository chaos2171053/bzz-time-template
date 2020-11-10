import * as fse from 'fs-extra';
const createFile =  async (file: string, data: string) => {
  let res;
  try {
    res = await fse.outputFile(file, data);
  } catch (error) {
    throw new Error(error); 
  }
  return res;
};
export default createFile;
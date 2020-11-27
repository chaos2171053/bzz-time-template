export default function replaceComponentName(fileContent: String) {
  const replaceContent = `CreateModal.js`.split(".")[0];
  fileContent = fileContent.replace(/ComponentName/g, replaceContent);
  return fileContent;
}

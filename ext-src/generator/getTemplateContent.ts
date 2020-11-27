import * as fse from "fs-extra";
import * as path from "path";
export default async function getTemplateContent(
  extensionPath: string,
  templateName: string
) {
  const templatePath = path.join(extensionPath, `/templates/${templateName}`);

  const templateContent = await fse
    .readFileSync(templatePath, "utf8")
    .toString();
  return templateContent;
}

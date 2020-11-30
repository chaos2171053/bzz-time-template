function insert(str: string, index: number, value: string) {
  return str.substr(0, index) + value + str.substr(index);
}

export default function repalceTableColumn(
  fileContent: string,
  listDataSet: any
) {
  const columnIndex = fileContent.indexOf("{/* Column */}");

  const { fields } = listDataSet;

  const columnStr = fields
    .map((field: { name: string; key: string }) => {
      const { name, key } = field;
      const str = `
    <Column
      name="${name}"
      align="center"
      key="${key}"/>`;
      return str;
    })
    .join("");

  fileContent = [
    fileContent.slice(0, columnIndex),
    columnStr,
    fileContent.slice(columnIndex),
  ].join("");
  //fileContent = insert(fileContent, columnIndex, columnStr);

  return fileContent;
}

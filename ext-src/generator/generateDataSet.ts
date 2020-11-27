export default function generateDataSet(dataSet: object) {
  const templateContent = `export default ({ organizationId, communityId }) => {
    return ${JSON.stringify(dataSet)}
  }`;
  return templateContent;
}

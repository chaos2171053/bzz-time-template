// undefined, Functions, and Symbols are not valid JSON values
// https://stackoverflow.com/questions/12651977/why-cant-you-stringify-a-function-expression

export default function generateDataSet(dataSet: any) {
  const { transport, ...others } = dataSet;
  const readUrl = transport.read.url;
  let templateContent = "";
  if (!readUrl) {
    templateContent = `export default ({ organizationId, communityId }) => {
      return ${JSON.stringify(dataSet)}
    }`;
  } else {
    templateContent = `export default ({ organizationId, communityId }) => {
      return {
        ${"" + JSON.stringify(others).substring(1).slice(0, -1)},
        transport: {
          read: (queryParams) => {
            const { params } = queryParams;
            return {
              url: "${readUrl}",
              method: 'get',
              params: {
                ...params,
                communityId,
                organizationId,
              },
            };
          },
        },
      }
    }`;
  }

  return templateContent;
}

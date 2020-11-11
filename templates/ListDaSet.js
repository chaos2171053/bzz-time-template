export default ({ organizationId, communityId }) => {
  return {
    autoQuery: true,
    paging: true,
    pageSize: 10,
    selection: 'none',
    // TODO: 记得去掉 MOCK 数据
    data: (() => {
      let list = [];
      for (let i = 0, len = 10; i < len; i++) {
        list.push({
          id: i,
        });
      }
      return list;
    })(),
    fields: [
      { name: 'rowNum', type: 'string', label: '序号', key: 'rowNum' },
    ],
    queryFields: [
    ],
    transport: {
      // read: (queryParams) => {
      //   const { params } = queryParams;
      //   return {
      //     url: '',
      //     method: 'get',
      //     params: {
      //       ...params,
      //       communityId,
      //       organizationId,
      //     },
      //   };
      // },
    },
  };
};

import { DataSet } from 'choerodon-ui/pro';

export default () => ({
  autoQuery: false,
  transport: {
    // read: ({ dataSet }) => {
    //   const { categoryId } = dataSet.current.toData();
    //   return {
    //     url: '',
    //     method: 'get',
    //     params: { categoryId },
    //   };
    // },
    // create: {
    //   url: '',
    //   method: 'post',
    // },
    // update: {
    //   url: '',
    //   method: 'put',
    // },
  },
  fields: [
    {
      name: 'couponId',
      type: 'auto',
      required: false,
    },
  ],
});

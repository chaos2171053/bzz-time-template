export const ListDataSetInitialValues = {
  autoQuery: true, // 初始化后自动查询
  paging: true, // 前端分页、后端分页还是不分页
  pageSize: 10, // 分页大小
  selection: "none", // 选择的模式
  fields: [], // 列表字段
};

export const formDataSetInitialValues = {};

export const pageDataSetInitialValues = {
  directoryName: "", // 一级目录名，同路由名
  listDataSet: {
    ...ListDataSetInitialValues,
  },
};

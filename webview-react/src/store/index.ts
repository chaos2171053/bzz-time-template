export interface fieldInitialValuesProps {
  autoQuery: boolean; // 初始化后自动查询
  paging: boolean; // 前端分页、后端分页还是不分页
  pageSize: number; // 分页大小
  selection: string; // 选择的模式
  fields: Array<any>; // 列表字段
  queryFields: Array<any>; // 查询字段
  transport: {
    read: {
      url: string;
    };
  };
}
export const fieldInitialValues: fieldInitialValuesProps = {
  autoQuery: true, // 初始化后自动查询
  paging: true, // 前端分页、后端分页还是不分页
  pageSize: 10, // 分页大小
  selection: "none", // 选择的模式
  fields: [], // 列表字段
  queryFields: [], // 查询字段
  transport: {
    read: {
      url: "",
    },
  },
};
export const ListDataSetInitialValues = {
  ...fieldInitialValues,
};

export const formDataSetInitialValues = {};

export interface pageDataSetInitialValuesProps {
  directoryName: string;
  listDataSet: fieldInitialValuesProps;
}
export const pageDataSetInitialValues: pageDataSetInitialValuesProps = {
  directoryName: "", // 一级目录名，同路由名
  listDataSet: {
    ...ListDataSetInitialValues,
  },
};

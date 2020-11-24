import React from "react";
import { Form,  Button,Space } from "antd";
import VscodeHelper from '../utils/vscode-helper';
import DirectoryForm from './DirectoryForm'
import ListForm from  './ListForm';

const vscode = new VscodeHelper()

const formInitialValues = {
  directoryName:'',// 一级目录名，同路由名
  listDataSet:{
    autoQuery:true, // 初始化后自动查询
  }
}

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const GenerateForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    vscode.postMessage({
      command:'generatePageByForm',
      data:values
    })
  };
  

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={formInitialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <DirectoryForm/>
      <ListForm/>
      <Form.Item {...tailLayout}>
        <Space>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
        <Button type="primary" htmlType="submit">
          生成
        </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default GenerateForm;

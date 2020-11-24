import React from "react";
import { Form,  Button } from "antd";
import DirectoryForm from './DirectoryForm'
import VscodeHelper from '../utils/vscode-helper';

const vscode = new VscodeHelper()

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const GenerateForm = () => {
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

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <DirectoryForm/>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          生成
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GenerateForm;

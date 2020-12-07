import React, { useState, useEffect } from "react";
import { Form, Button, Space, message } from "antd";
import VscodeHelper from "../../../utils/vscode-helper";
import DirectoryForm from "./DirectoryForm";
import ListForm from "./ListForm";
import {
  pageDataSetInitialValues,
  pageDataSetInitialValuesProps,
} from "../../../store";
import "./GenerateList.less";

const vscode = new VscodeHelper();

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const btnLayout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

const transformFormValus = (values: pageDataSetInitialValuesProps) => {
  // filter undefined fields made by ant design`s bug?
  if (values.listDataSet) {
    values.listDataSet.fields = values.listDataSet.fields.filter(
      (field) => field.name
    );
    values.listDataSet.queryFields = values.listDataSet.queryFields.filter(
      (field) => field.name
    );
  }
  return values;
};

const GenerateList = () => {
  const [form] = Form.useForm();
  const [submitFlag, setSubmitFlag] = useState(false);
  const onFinish = (values: any) => {
    values = transformFormValus(values);
    console.log("Success:", values);
    if (submitFlag) {
      return;
    }
    setSubmitFlag(true);
    vscode.postMessage({
      command: "generatePageByForm",
      data: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    window.addEventListener("message", (event: any) => {
      const vscodemessage = event.data; // The JSON data our extension sent
      const { command, data } = vscodemessage;
      switch (command) {
        case "generate":
          if (data.message === "success") {
            message.success("生成成功");
          } else {
            message.error("生成失败");
            setSubmitFlag(false);
          }
          break;
        default:
          break;
      }
    });
    return () => {};
  }, []);

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={{ ...pageDataSetInitialValues }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="generate-form"
    >
      <DirectoryForm />
      <ListForm form={form} />
      <Form.Item {...btnLayout} className="form-btns">
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

export default GenerateList;

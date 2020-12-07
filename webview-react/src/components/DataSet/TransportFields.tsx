import { Form, Input } from "antd";
import React from "react";
import { FieldCommonProps } from "./interface";

export default function TransportFields(props: FieldCommonProps) {
  const { DataSetType } = props;
  return (
    <>
      <Form.Item
        label="查询功能接口地址"
        name={[DataSetType, "transport", "read", "url"]}
        rules={[
          {
            required: false,
            message: "请输入查询接口",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <p>其他功能暂未开放。</p>
    </>
  );
}

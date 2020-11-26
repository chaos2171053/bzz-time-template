import React, { useState } from "react";
import { Form, Radio, InputNumber, Select } from "antd";
import { RadioChangeEvent } from "antd/lib/radio/interface";
import { FieldCommonProps } from "./interface";

const { Option } = Select;

/**
 * DataSet 的 基本字段
 */

function BasicFields(props: FieldCommonProps) {
  const { form, DataSetType } = props;

  const [paging, setPaging] = useState(true);

  const onPagingChange = (e: RadioChangeEvent) => {
    const value = e?.target?.value;
    form.setFieldsValue({
      listDataSet: {
        pageSize: 10,
      },
    });
    if (value) {
      setPaging(true);
    } else {
      setPaging(false);
    }
  };

  return (
    <>
      <Form.Item
        label="初始化后自动查询"
        name={[DataSetType, "autoQuery"]}
        rules={[
          {
            required: true,
            message: "请选择 autoQuery",
          },
        ]}
      >
        <Radio.Group>
          <Radio value={true}>是</Radio>
          <Radio value={false}>否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="是否分页"
        name={[DataSetType, "paging"]}
        rules={[
          {
            required: true,
            message: "请选择 paging",
          },
        ]}
      >
        <Radio.Group onChange={onPagingChange}>
          <Radio value={true}>是</Radio>
          <Radio value={false}>否</Radio>
        </Radio.Group>
      </Form.Item>
      {paging ? (
        <>
          <Form.Item
            label="每页数据条数"
            name={[DataSetType, "pageSize"]}
            rules={[
              {
                required: paging,
                message: "请输入 pageSize",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </>
      ) : null}
      <Form.Item
        label="选择模式"
        name={[DataSetType, "selection"]}
        rules={[
          {
            required: true,
            message: "请选择 selection",
          },
        ]}
      >
        <Select>
          <Option value="none">无</Option>
          <Option value="single">单选</Option>
          <Option value="multiple">多选</Option>
        </Select>
      </Form.Item>
    </>
  );
}

export default BasicFields;

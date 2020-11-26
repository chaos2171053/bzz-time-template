import React from "react";
import { Form, Input, Button, Space, Card } from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./Fields.less";

const key = new Date().valueOf();

interface FieldsProps {
  DataSetName: string;
}

/**
 * DataSet 的 fields 字段
 */
function Fields(props: FieldsProps) {
  const { DataSetName } = props;
  return (
    <>
      <Form.List name={[DataSetName, "fields"]}>
        {(fields, { add, remove }) => (
          <>
            <Space direction="vertical" style={{ width: "100%" }}>
              {fields.map((field, index) => (
                <div className="fields-wrapper" key={key + index}>
                  <Card style={{ width: "100%" }}>
                    <Form.Item
                      {...field}
                      name={[field.name, "name"]}
                      fieldKey={[field.fieldKey, "name"]}
                      label="字段名"
                      rules={[{ required: true, message: "请输入字段名" }]}
                    >
                      <Input placeholder="字段名" />
                    </Form.Item>
                  </Card>
                  <CloseCircleOutlined
                    onClick={() => remove(field.name)}
                    className="fields-wrapper__minus"
                  />
                </div>
              ))}
            </Space>
            <Form.Item className="form-btn__wrapper">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                className="form-btn"
              >
                添加列表字段
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default Fields;

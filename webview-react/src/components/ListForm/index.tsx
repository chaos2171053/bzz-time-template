import React from "react";
import { Collapse, Form, Space, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ListDataSetProps from "./ListDataSetProps";

const { Panel } = Collapse;

function ListFrom() {
  return (
    <>
      <Collapse defaultActiveKey={["listDataSet"]}>
        <Panel header="列表DataSet配置" key="listDataSet">
          <ListDataSetProps />

          <Form.List name="listDataSet">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...field}
                      name={[field.name, "first"]}
                      fieldKey={[field.fieldKey, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "last"]}
                      fieldKey={[field.fieldKey, "last"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加字段
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Panel>
      </Collapse>
    </>
  );
}

export default ListFrom;

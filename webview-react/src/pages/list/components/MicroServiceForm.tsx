import React from "react";
import { Form, Select, Collapse } from "antd";

const { Panel } = Collapse;
const { Option } = Select;

export default function MicroService() {
  return (
    <>
      <Collapse defaultActiveKey={["microService"]}>
        <Panel header="微服务配置" key="microService">
          <Form.Item
            label="微服务名称"
            name={["microService", "microServiceName"]}
            rules={[
              {
                required: true,
                message: "请选择微服务名称",
              },
            ]}
          >
            <Select>
              <Option value="property">物业</Option>
              <Option value="payment">缴费</Option>
              <Option value="passage">通行</Option>
            </Select>
          </Form.Item>
        </Panel>
      </Collapse>
    </>
  );
}

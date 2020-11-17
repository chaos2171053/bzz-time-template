import React from 'react'
import { Form, Input, Collapse } from "antd";

const { Panel } = Collapse;


function DirectoryForm() {
  return (
    <>
    <Collapse defaultActiveKey={["directory"]}>
        <Panel header="目录配置" key="directory">
          <Form.Item
            label="目录名"
            name="directoryName"
            rules={[
              {
                required: true,
                message: "请输入目录名",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Panel>
      </Collapse>
    </>
  )
}

export default DirectoryForm
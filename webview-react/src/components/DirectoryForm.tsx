import React from 'react'
import { Form, Input, Collapse } from "antd";

const { Panel } = Collapse;


function DirectoryForm() {
  return (
    <>
    <Collapse defaultActiveKey={["directoryName"]}>
        <Panel header="目录配置" key="directoryName">
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
            <Input placeholder="目录名最好对应路由名"/>
          </Form.Item>
        </Panel>
      </Collapse>
    </>
  )
}

export default DirectoryForm
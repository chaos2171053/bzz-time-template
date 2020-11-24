import React from "react";
import { Form ,Radio} from "antd";


function ListDataSetProps() {
  return (
    <>
      <Form.Item
          label="autoQuery"
          name={['listDataSet', 'autoQuery']}
          rules={[
            {
              required: true,
              message: "请选择autoQuery",
            },
          ]}
        >
        <Radio.Group >
            <Radio value={true}>是</Radio>
          <Radio value={false}>否</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
}

export default ListDataSetProps;

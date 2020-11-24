import React from "react";
import { Collapse, Space, Card } from "antd";
import { FormInstance } from "antd/lib/form/hooks/useForm";
import ListPage from "./ListPage";
import ListFields from "./ListFields";

const { Panel } = Collapse;
interface ListFormProps {
  form: FormInstance;
}

function ListForm(props: ListFormProps) {
  const { form } = props;
  return (
    <>
      <Collapse defaultActiveKey={["listDataSet"]}>
        <Panel header="列表DataSet配置" key="listDataSet">
          <Space
            direction="vertical"
            size="large"
            style={{ width: "100%", padding: "25px" }}
          >
            <Card>
              <ListPage form={form} />
            </Card>
            <ListFields />
          </Space>
        </Panel>
      </Collapse>
    </>
  );
}

export default ListForm;

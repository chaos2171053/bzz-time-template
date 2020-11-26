import React from "react";
import { Collapse, Space, Card } from "antd";
import { FormInstance } from "antd/lib/form/hooks/useForm";
import ListPageDataSet from "../DataSet";
import Fields from "../DataSet/Fields";

const { Panel } = Collapse;
interface ListFormProps {
  form: FormInstance;
}

function ListForm(props: ListFormProps) {
  const { form } = props;
  const DataSetName = "listDataSet";
  return (
    <>
      <Collapse defaultActiveKey={[DataSetName]}>
        <Panel header="列表DataSet配置" key={DataSetName}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: "100%", padding: "25px" }}
          >
            <Card>
              <ListPageDataSet form={form} dataSet={{ name: DataSetName }} />
            </Card>
            <Fields DataSetName={DataSetName} />
          </Space>
        </Panel>
      </Collapse>
    </>
  );
}

export default ListForm;

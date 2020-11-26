import React from "react";
import { Collapse, Space } from "antd";
import { FormInstance } from "antd/lib/form/hooks/useForm";
import BzzDataSet from "../DataSet";

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
            <BzzDataSet form={form} dataSet={{ name: DataSetName }} />
          </Space>
        </Panel>
      </Collapse>
    </>
  );
}

export default ListForm;

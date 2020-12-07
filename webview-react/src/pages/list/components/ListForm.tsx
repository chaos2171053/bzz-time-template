import React from "react";
import { Collapse, Space } from "antd";
import { FormInstance } from "antd/lib/form/hooks/useForm";
import BzzDataSet from "../../../components/DataSet";
import "./ListForm.less";

const { Panel } = Collapse;
interface ListFormProps {
  form: FormInstance;
}

function ListForm(props: ListFormProps) {
  const { form } = props;
  const DataSetType = "listDataSet";
  return (
    <>
      <Collapse defaultActiveKey={[DataSetType]}>
        <Panel header="列表 DataSet 配置" key={DataSetType}>
          <Space direction="vertical" size="large" className="space-wrapper">
            <BzzDataSet form={form} DataSetType={DataSetType} />
          </Space>
        </Panel>
      </Collapse>
    </>
  );
}

export default ListForm;

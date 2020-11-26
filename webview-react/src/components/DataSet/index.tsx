import Card from "antd/lib/card";
import React from "react";
import BasicFields from "./BasicFields";
import Fields from "./Fields";
import { FieldCommonProps } from "./interface";
import "./index.less";

interface BzzDataSetProps extends FieldCommonProps {}

function BzzDataSet(props: BzzDataSetProps) {
  return (
    <>
      <div className="card-wrapper">
        <Card title="基本字段">
          <BasicFields {...props} />
        </Card>
      </div>
      <div className="card-wrapper">
        <Card title="fields 字段">
          <Fields {...props} DataSetFieldName="fields" />
        </Card>
      </div>
      <div className="card-wrapper">
        <Card title="queryFields 字段">
          <Fields {...props} DataSetFieldName="queryFields" />
        </Card>
      </div>
    </>
  );
}

export default BzzDataSet;

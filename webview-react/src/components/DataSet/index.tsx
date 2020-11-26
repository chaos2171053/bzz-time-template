import Card from "antd/lib/card";
import React from "react";
import BasicFields from "./BasicFields";
import Fields from "./Fields";
import { FieldCommonProps } from "./interface";
import QueryFields from "./QueryFields";
import "./index.less";

interface BzzDataSetProps extends FieldCommonProps {}

function BzzDataSet(props: BzzDataSetProps) {
  return (
    <>
      <Card>
        <BasicFields {...props} />
      </Card>
      <Card className="card-wrapper">
        <Fields {...props} />
      </Card>
      <Card className="card-wrapper">
        <QueryFields {...props} />
      </Card>
    </>
  );
}

export default BzzDataSet;

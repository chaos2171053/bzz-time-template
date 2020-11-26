import Card from "antd/lib/card";
import React from "react";
import BasicFields from "./BasicFields";
import Fields from "./Fields";
import { FieldCommonProps } from "./interface";

interface BzzDataSetProps extends FieldCommonProps {}

function BzzDataSet(props: BzzDataSetProps) {
  const { form } = props;
  return (
    <>
      <Card>
        <BasicFields form={form} dataSet={{ name: props.dataSet.name }} />
      </Card>
      <Fields form={form} dataSet={{ name: props.dataSet.name }} />
    </>
  );
}

export default BzzDataSet;

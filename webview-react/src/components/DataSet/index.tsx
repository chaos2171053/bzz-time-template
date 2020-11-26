import React from "react";
import BasicFields from "./BasicFields";
import { FieldCommonProps } from "./interface";

interface BzzDataSetProps extends FieldCommonProps {}

function BzzDataSet(props: BzzDataSetProps) {
  return (
    <>
      <BasicFields {...props} />
    </>
  );
}

export default BzzDataSet;

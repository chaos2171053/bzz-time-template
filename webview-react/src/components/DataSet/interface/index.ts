import { FormInstance } from "antd/lib/form/hooks/useForm";

export interface FieldCommonProps {
  form: FormInstance;
  DataSetName: string;
}

export enum FieldType {
  auto = "auto",
  boolean = "boolean",
  number = "number",
  currency = "currency",
  string = "string",
  date = "date",
  dateTime = "dateTime",
  week = "week",
  month = "month",
  year = "year",
  time = "time",
  object = "object",
  intl = "intl",
  email = "email",
  url = "url",
  color = "color",
  reactNode = "reactNode",
}

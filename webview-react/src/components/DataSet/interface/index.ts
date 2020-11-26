import { FormInstance } from "antd/lib/form/hooks/useForm";

export interface FieldCommonProps {
  form: FormInstance;
  dataSet: {
    name: string;
  };
}

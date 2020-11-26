import React from "react";
import { Form, Input, Button, Space, Card, Select } from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { FieldCommonProps } from "./interface";
import "./Fields.less";

const { Option } = Select;

enum FieldType {
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
const FieldTypes = Object.values(FieldType);

const key = new Date().valueOf();

interface FieldsProps extends FieldCommonProps {}

/**
 * DataSet 的 fields 字段
 */
function Fields(props: FieldsProps) {
  const { dataSet, form } = props;
  const DataSetName = dataSet.name || "";

  const onRemoveField = (index: number, remove: Function) => {
    // const fields = [...form.getFieldValue(DataSetName).fields];

    // fields.splice(index, 1);
    // console.log("fields: ", fields);

    // form.setFieldsValue({
    //   [DataSetName]: {
    //     fields: [...fields],
    //   },
    // });
    // TODO: bug 删除成功后，生成的数据还包含删除的数据。
    remove(index);
    console.log(form.getFieldValue(DataSetName));
  };

  const onFieldNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fields = [...form.getFieldValue(DataSetName).fields];
    fields[index].key = key + e.target.value;
    form.setFieldsValue({
      [DataSetName]: {
        fields: [...fields],
      },
    });
  };

  return (
    <>
      <Form.List name={[DataSetName, "fields"]}>
        {(fields, { add, remove }) => (
          <>
            <Space direction="vertical" style={{ width: "100%" }}>
              {fields.map((field, index) => {
                const baseFieldName = `${field.name}`;

                const baseFieldKey = `${field.fieldKey}__${key + index}`;

                return (
                  <div
                    className="fields-wrapper"
                    key={key + baseFieldKey + index}
                  >
                    <Card style={{ width: "100%" }}>
                      <Form.Item
                        {...field}
                        key={`${baseFieldKey}__name`}
                        name={[baseFieldName, "name"]}
                        fieldKey={[`${baseFieldKey}__name`, "name"]}
                        label="字段名 name"
                        rules={[{ required: true, message: "请输入字段名" }]}
                      >
                        <Input
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => onFieldNameChange(event, index)}
                        />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        key={`${baseFieldKey}__type`}
                        name={[baseFieldName, "type"]}
                        fieldKey={[`${baseFieldKey}__type`, "type"]}
                        label="字段类型 type"
                        rules={[
                          {
                            required: true,
                            message: "请选择字段类型",
                          },
                        ]}
                      >
                        <Select>
                          {FieldTypes.map((type, index) => (
                            <>
                              <Option
                                value={type}
                                key={baseFieldKey + type + index}
                              >
                                {type}
                              </Option>
                            </>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...field}
                        key={`${baseFieldKey}__label`}
                        name={[baseFieldName, "label"]}
                        fieldKey={[`${baseFieldKey}__label`, "label"]}
                        label="标签 label"
                        rules={[{ required: true, message: "请输入标签" }]}
                      >
                        <Input />
                      </Form.Item>
                    </Card>
                    <CloseCircleOutlined
                      onClick={() => onRemoveField(index, remove)}
                      className="fields-wrapper__minus"
                    />
                  </div>
                );
              })}
            </Space>
            <Form.Item className="form-btn__wrapper">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                className="form-btn"
              >
                添加列表字段
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default Fields;

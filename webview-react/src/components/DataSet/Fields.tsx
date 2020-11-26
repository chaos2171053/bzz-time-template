import React from "react";
import { Form, Input, Button, Space, Card, Select } from "antd";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { FieldCommonProps, FieldType } from "./interface";
import "./Fields.less";

const { Option } = Select;

const FieldTypes = Object.values(FieldType);

const key = new Date().valueOf();

interface FieldsProps extends FieldCommonProps {
  DataSetFieldName: string;
}

/**
 * DataSet 的 fields 字段
 */
function Fields(props: FieldsProps) {
  const { form, DataSetType, DataSetFieldName } = props;

  const onRemoveField = (index: number, remove: Function) => {
    // TODO: bug 删除成功后，生成的数据还包含删除的数据。
    remove(index);
  };

  const onFieldNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fields = [...form.getFieldValue(DataSetType)[DataSetFieldName]];
    fields[index].key = key + e.target.value;
    form.setFieldsValue({
      [DataSetType]: {
        [DataSetFieldName]: [...fields],
      },
    });
  };

  return (
    <>
      <Form.List name={[DataSetType, DataSetFieldName]}>
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
                添加字段
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default Fields;

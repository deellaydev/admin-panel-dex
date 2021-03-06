import React, {FC} from 'react';
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import {Form, Input, Select, Button, Modal} from "antd";
import {useAppDispatch} from "../../../../store/reduxHooks";
import {IEmployee} from "../../../../api/dto/customers";
import {addNewSeekerAction} from "../../customersAsyncAction";

interface IProps {
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const NewSeekerForm: FC<IProps> = ({isModalVisible, setIsModalVisible}) => {

  const {Option} = Select

  const [form] = Form.useForm()
  const dispatch = useAppDispatch();

  const getValues = async (data: IEmployee) => {
    await dispatch(addNewSeekerAction(data))
    form.resetFields();
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal title={"Добавить соискателя"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Button style={{width: "100%"}} type={"primary"} size={"large"} htmlType={"submit"} form={"addNewSeeker"}
              key={"addButton"}>Добавить
        соискателя</Button>
    ]}>
      <FormWrapper>
        <Title>Staff Pro</Title>
        <Title level={4}>Добавить соискателя</Title>
        <Form
          form={form}
          id={"addNewSeeker"}
          name={"addNewSeeker"}
          onFinish={getValues}>
          <Form.Item
            name={"email"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }, {
              type: "email",
              message: "Неверный формат почты"
            }]}
            hasFeedback>
            <Input placeholder={"Email"}/>
          </Form.Item>
          <Form.Item
            name={"surname"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input placeholder={"Фамилия"}/>
          </Form.Item>
          <Form.Item
            name={"name"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input placeholder={"Имя"}/>
          </Form.Item>
          <Form.Item
            name={"patronymic"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input placeholder={"Отчество"}/>
          </Form.Item>
          <FlexForm>
            <Form.Item
              name={"dayOfBirth"}
              style={{
                width: "20%"
              }}
              rules={[{
                required: true,
                message: "Обязательное поле"
              }]}
              hasFeedback>
              <Input placeholder={"День"} type={"number"} max={31} min={1}/>
            </Form.Item>
            <Form.Item
              name={"monthOfBirth"}
              style={{
                width: "50%"
              }}
              rules={[{
                required: true,
                message: "Обязательное поле"
              }]}
              hasFeedback>
              <Select
                showSearch
                placeholder="Месяц"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                }>
                <Option value={"01"}>Январь</Option>
                <Option value={"02"}>Февраль</Option>
                <Option value={"03"}>Март</Option>
                <Option value={"04"}>Апрель</Option>
                <Option value={"05"}>Май</Option>
                <Option value={"06"}>Июнь</Option>
                <Option value={"07"}>Июль</Option>
                <Option value={"08"}>Август</Option>
                <Option value={"09"}>Сентябрь</Option>
                <Option value={"10"}>Октябрь</Option>
                <Option value={"11"}>Ноябрь</Option>
                <Option value={"12"}>Декабрь</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"yearOfBirth"}
              style={{
                width: "20%"
              }}
              rules={[{
                required: true,
                message: "Обязательное поле"
              }]}
              hasFeedback>
              <Input placeholder={"Год"} type={"number"} max={new Date().getFullYear()} min={1900}/>
            </Form.Item>
          </FlexForm>
          <FlexForm>
            <Form.Item
              name={"telNumber"}
              style={{
                width: "60%"
              }}
              rules={[{
                pattern: new RegExp(/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im),
                message: "Неверный формат телефона"
              }]}
              hasFeedback>
              <Input placeholder={"Номер телефона"}/>
            </Form.Item>
            <Form.Item
              name={"sex"}
              style={{
                width: "30%"
              }}
              rules={[{
                required: true,
                message: "Обязательное поле"
              }]}
              hasFeedback>
              <Select
                showSearch
                placeholder="Пол"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                }>
                <Option value={"Мужской"}>Мужской</Option>
                <Option value={"Женский"}>Женский</Option>
              </Select>
            </Form.Item>
          </FlexForm>
        </Form>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.div`
  max-width: 450px;
  text-align: center;
`
const FlexForm = styled.div`
  display: flex;
  justify-content: space-between;
`
import React from 'react';
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import {Typography, Form, Input, Select, Checkbox, Button} from "antd";
import value from "*.png";
import {useNavigate} from "react-router-dom";

export const RegisterForm = () => {

  const {Paragraph, Title} = Typography
  const {Option} = Select

  const navigate = useNavigate();

  const getValues = () => {

  }

  return (
    <FormWrapper>
      <Title>Staff Pro</Title>
      <Title level={4}>Зарегестрируйтесь</Title>
      <Form>
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
        <FlexForm>
          <Form.Item
            name={"name"}
            style={{
              width: "45%"
            }}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input placeholder={"Имя"}/>
          </Form.Item>
          <Form.Item
            name={"patronymic"}
            style={{
              width: "45%"
            }}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input placeholder={"Отчество"}/>
          </Form.Item>
        </FlexForm>
        <Form.Item
          name={"password"}
          rules={[{
            required: true,
            message: "Обязательное поле"
          }]}
          hasFeedback>
          <Input.Password placeholder={"Пароль"}/>
        </Form.Item>
        <Form.Item
          name={"confirmPassword"}
          dependencies={['password']}
          rules={[{
            required: true,
            message: "Обязательное поле"
          },
            ({getFieldValue}) => ({
              validator: (_, value) => {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error("Пароли не совпадают"))
                }
              }
            })]}
          hasFeedback>
          <Input.Password placeholder={"Повторите пароль"}/>
        </Form.Item>

        <Paragraph style={{textAlign: "start"}}>Дата рождения</Paragraph>

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
            },
              {
                required: true,
                message: "Обязательное поле"
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

        <Form.Item
          name={"agreement"}
          valuePropName="checked"
          rules={[{
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error("Для регистрации необходимо принять условия соглашения")),
          },]}
        >
          <Checkbox style={{textAlign: "left"}}>
            <Paragraph>Я согласен с <a>пользовательским соглашением</a> и <a>политикой обработки персональных данных
              пользователей</a></Paragraph>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button style={{width: "100%"}} type={"primary"} size={"large"} htmlType={"submit"}>Создать аккаунт</Button>
        </Form.Item>

      </Form>

      <Paragraph>Уже есть аккаунт в Staff Pro? <a onClick={() => navigate('/login')}>Войдите</a></Paragraph>

    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 650px;
  text-align: center;
`
const FlexForm = styled.div`
  display: flex;
  justify-content: space-between;
`
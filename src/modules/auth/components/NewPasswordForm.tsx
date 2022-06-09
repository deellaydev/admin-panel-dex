import React from 'react';
import styled from "styled-components";
import {Button, Form, Input, Typography} from "antd";

interface IChangePassword {
  password: string;
  confirmPassword: string;
}

export const NewPasswordForm = () => {

  const { Title } = Typography

  return (
    <FormWrapper>
      <Title>StaffPro</Title>
      <Title level={5}>Введите новый пароль</Title>
      <Form
        name={"changePassword"}>
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
        <Form.Item>
          <Button type={"primary"} size={"large"} htmlType={"submit"} style={{width: "100%"}}>Войти</Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  width: 330px;
  text-align: center;
`
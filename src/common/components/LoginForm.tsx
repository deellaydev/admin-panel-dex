import React, {FC} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Checkbox, Form, Input} from "antd";
import {ILogin} from "../../dto/auth";
import styled from "styled-components";

interface IProps {
  handleSubmit: (data: ILogin) => void;
}

export const LoginForm: FC<IProps> = ({handleSubmit}) => {
  return (
    <FormWrapper>
      <Title>Войти в Staff Pro</Title>
      <Form
        name={"login"}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: "464px"
        }}
        layout={"vertical"}
        initialValues={{
          isRemember: true
        }}
        onFinish={handleSubmit}>
        <Form.Item
          label={"Эл.адрес"}
          name={"email"}
          rules={[{
            required: true,
            message: 'Заполните это поле'
          }]}>
          <Input size={"large"}/>
        </Form.Item>
        <Form.Item
          label={"Пароль"}
          name={"password"}
          rules={[{
            required: true,
            message: 'Заполните это поле'
          }]}>
          <Input type={"password"} size={"large"}/>
        </Form.Item>
        <Form.Item>
          <div  style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Form.Item
              name={"isRemember"}
              valuePropName={"checked"}
              noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <a>
              Забыли пароль?
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} size={"large"} htmlType={"submit"}>Войти</Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 450px;
`
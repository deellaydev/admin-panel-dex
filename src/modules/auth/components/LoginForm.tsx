import React, {FC, useEffect} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Checkbox, Form, Input, message} from "antd";
import {ILogin} from "../../../api/dto/auth";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {loginAction} from "../authAsyncAction";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getValues = async ({email, password} : ILogin) => {
    await dispatch(loginAction({data: {email, password}, navigate: () => navigate('/'), success: () => message.success("Вы успешно вошли")}))
  }

  return (
    <FormWrapper>
      <Title>Войти в Staff Pro</Title>
      <Form
        name={"login"}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout={"vertical"}
        initialValues={{
          isRemember: true
        }}
        onFinish={getValues}>
        <Form.Item
          label={"Эл.адрес"}
          name={"email"}
          rules={[{
            required: true,
            message: "Обязательное поле"
          },
            {
              type: "email",
              message: "Неверный формат почты"
            }
          ]}>
          <Input size={"large"}/>
        </Form.Item>
        <Form.Item
          label={"Пароль"}
          name={"password"}
          rules={[{
            required: true,
            message: "Обязательное поле"
          }]}>
          <Input.Password size={"large"}/>
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

            <a onClick={() => navigate('/restorePassword')}>
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
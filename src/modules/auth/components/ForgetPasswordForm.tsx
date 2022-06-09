import React from 'react';
import styled from "styled-components";
import {Button, Form, Input, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../store/reduxHooks";
import {restorePasswordAction} from "../authAsyncAction";

interface IRestorePassword {
  email: string
}

export const ForgetPasswordForm = () => {

  const {Title, Paragraph} = Typography

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const restorePassword = async ({email}: IRestorePassword) => {
    await dispatch(restorePasswordAction({
      email,
      navigate: ()  => navigate('/restorePasswordSuccess')
    }))
  }

  return (
    <FormWrapper>
      <Title style={{marginBottom: "25px"}}>StaffPro</Title>
      <Title level={5}>Забыли пароль?</Title>
      <Paragraph style={{textAlign: "left"}}>Введите ваш эл. адрес, чтобы восстановить доступ к своему
        аккаунту</Paragraph>
      <Form
        name={"restorePassword"}
        onFinish={restorePassword}>
        <Form.Item
          name={"email"}
          rules={[{
            type: "email",
            message: "Неверный формат почты"
          }, {
            required: true,
            message: "Обязательное поле"
          }]}>
          <Input placeholder={"Email"}/>
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} size={"large"} htmlType={"submit"} style={{width: "100%"}}>Подтвердить</Button>
        </Form.Item>
      </Form>
      <Paragraph>Впервые в StaffPro? <a onClick={() => navigate('/register')}>Зарегестрируйтесь</a></Paragraph>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  width: 330px;
  text-align: center;
`
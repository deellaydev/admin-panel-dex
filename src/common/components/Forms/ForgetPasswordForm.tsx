import React, {useEffect} from 'react';
import styled from "styled-components";
import {Button, Form, Input, message, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {restorePasswordAction} from "../../../modules/auth/authAsyncAction";

interface IRestorePassword {
  email: string
}

export const ForgetPasswordForm = () => {

  const { Title, Paragraph } = Typography

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.authReducer)

  const restorePassword = async ({email} : IRestorePassword) => {
    await dispatch(restorePasswordAction(email))
  }

  useEffect(() => {
    if (localStorage.getItem('restorePasswordUser')){
      message.success("Пользователь найден", 3).then(() => navigate('/restorePasswordSuccess'))
    }
  }, [localStorage.getItem('restorePasswordUser')])

  useEffect(() => {
    if (error !== undefined) {
      message.error(error, 3);
    }
  }, [error])


  return (
    <FormWrapper>
      <Title style={{marginBottom: "25px"}}>StaffPro</Title>
      <Title level={5}>Забыли пароль?</Title>
      <Paragraph style={{textAlign: "left"}}>Введите ваш эл. адрес, чтобы восстановить доступ к своему аккаунту</Paragraph>
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
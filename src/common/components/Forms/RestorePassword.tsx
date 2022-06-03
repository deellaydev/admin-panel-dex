import React, {useEffect} from 'react';
import styled from "styled-components";
import {Button, Typography} from "antd";
import {useNavigate} from "react-router-dom";

export const RestorePassword = () => {

  const { Title, Paragraph } = Typography
  const restoredUser = JSON.parse(localStorage.getItem("restorePasswordUser") || '')[0];

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("restorePasswordUser")
    navigate('/');
  }

  return (
    <FormWrapper>
      <Title>StaffPro</Title>
      <Title level={4}>Восстановление доступа к аккаунту</Title>
      <Paragraph>На электронный адрес <strong>{restoredUser.email}</strong> отправлено письмо. Перейдите по ссылке в письме для создания нового пароля.</Paragraph>
      <Button type={"primary"} style={{width: "100%"}} onClick={handleClick}>На главную</Button>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  width: 330px;
  text-align: left;
`
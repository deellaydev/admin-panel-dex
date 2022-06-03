import React from 'react';
import {BreadCrumbs} from "./BreadCrumbs";
import {Button, Typography} from 'antd'
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";

export const DashboardHeader = () => {

  const {Title, Paragraph} = Typography
  const location = useLocation().pathname.split('/')
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user") || '').user

  const handeSignOut = () => {
    localStorage.removeItem("user")
    navigate('/login')
  }

  return (
    <FlexHeader>
      <div>
        <BreadCrumbs/>
        <Title
          level={4}>{location[location.length - 1][0].toUpperCase() + location[location.length - 1].slice(1)}</Title>
      </div>
      <UserContainer>
        <Paragraph style={{marginBottom: "0"}}>{user.name} {user.surname}</Paragraph>
        <Button type={"primary"} onClick={handeSignOut}>Выход</Button>
      </UserContainer>
    </FlexHeader>
  );
};

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 30px;
  align-items: center;
  @media(max-width: 600px) {
    display: none;
  }
`
const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 600px) {
    justify-content: end;
  }
`
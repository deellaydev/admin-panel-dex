import React, {useEffect} from 'react';
import styled from "styled-components";
import {Col, Dropdown, Layout, Menu, message, Row, Typography} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import artwork from "../assets/icons/artwork.png";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {ILogin} from "../dto/auth";
import {loginAction} from "../modules/auth/authAsyncAction";
import { Outlet } from 'react-router-dom'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a>Русский</a>
        )
      },
      {
        key: '2',
        label: (
          <a>English</a>
        )
      }
    ]}/>
)

export const AuthLayout = () => {

  const { Paragraph, Title } = Typography

  return (
    <>
      <Row>
        <Col span={24}>
          <StyledHeader>
            <GlobalOutlined />
            <Paragraph style={{ marginBottom: "0"}}>Сменить язык на <a>english</a>?</Paragraph>
            <Dropdown overlay={menu}>
              <a onClick={e => e.preventDefault()}>
                Русский
              </a>
            </Dropdown>
          </StyledHeader>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <LeftSideWrapper>
            <TextLefSide>
              <Paragraph style={{
                color: "#fff",
                fontSize: "20px",
              }}>Staff Pro</Paragraph>
              <Title level={2} style={{
                color: "#fff",
              }}>HR processes are automated,
                welcome back!</Title>
            </TextLefSide>
            <ImageLeftSide src={artwork}/>
          </LeftSideWrapper>
        </Col>
        <Col span={18}>
          <RegisterLink>
            <Paragraph style={{marginBottom: "0"}}>Нет аккаунта? <a>Зарегестрироваться</a></Paragraph>
          </RegisterLink>
          <FormWrapper>
            <Outlet/>
          </FormWrapper>
        </Col>
      </Row>


    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;
  height: 64px;
  align-items: center;
`
const RegisterLink = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: end;
  align-items: center;
  padding-right: 20px;
`
const LeftSideWrapper = styled.div`
  height: calc(100vh - 64px);
  background: #1890FF;
`
const TextLefSide = styled.div`
  color: #fff;
  max-width: 300px;
  width: 100%;
  padding: 20px;
`
const FormWrapper = styled.div`
  height: calc(100% - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageLeftSide = styled.img`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`
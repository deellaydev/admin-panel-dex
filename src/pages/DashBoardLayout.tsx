import React from 'react';
import {MenuComponent} from "../common/components/DashBoard/Menu";
import {Col, Menu, Row} from "antd";
import {Outlet} from 'react-router-dom'
import styled from "styled-components";

export const DashBoardLayout = () => {
  return (
    <Container>
      <MenuWrapper>
        <MenuComponent/>
      </MenuWrapper>
      <OutletContainer>

        <Outlet/>
      </OutletContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`
const MenuWrapper = styled.div`
  max-width: 200px;
  width: 100%;
`
const OutletContainer = styled.div`
  width: 100%;
  height: 100vh;
`
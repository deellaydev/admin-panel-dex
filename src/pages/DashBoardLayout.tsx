import React, {useState} from 'react';
import {MenuComponent} from "../common/components/DashBoard/Menu";
import {Outlet} from 'react-router-dom'
import styled from "styled-components";
import {MenuOutlined} from "@ant-design/icons";

export const DashBoardLayout = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <Container>
      <MenuButton onClick={() => setActiveMenu(!activeMenu)}/>
      <MenuWrapper activeMenu={activeMenu}>
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
const MenuWrapper = styled.div<{activeMenu: boolean}>`
  max-width: 200px;
  width: 100%;
  transition: all .5s;
  z-index: 1;
  @media(max-width: 600px) {
    position: absolute;
    left: ${({activeMenu}) => activeMenu ? '0' : '-200px'};
  }
`
const OutletContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #F0F2F5;
`
const MenuButton = styled(MenuOutlined)`
  font-size: 24px;
  position: absolute;
  display: none;
  z-index: 3;
  @media(max-width: 600px) {
    display: block;
    top: 15px;
    left: 15px;
  }
`
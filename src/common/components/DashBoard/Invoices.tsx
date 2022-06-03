import React from 'react';
import styled from "styled-components";
import {BreadCrumbs} from "./BreadCrumbs";
import { Typography } from "antd";
import {DashboardHeader} from "./DashboardHeader";

export const Invoices = () => {

  const { Title } = Typography

  return (
    <Container>
      <DashboardHeader/>
    </Container>
  );
};
const Container = styled.div`
  padding: 30px;
`
const Header = styled.div`
  
`
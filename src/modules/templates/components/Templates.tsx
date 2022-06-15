import React from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";

export const Templates = () => {
  return (
    <Container>
      <DashboardHeader/>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 30px 0 30px;
  background: #fff;
`
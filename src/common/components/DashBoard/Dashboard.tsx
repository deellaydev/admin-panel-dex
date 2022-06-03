import React from 'react';
import styled from "styled-components";

export const Dashboard = () => {
  return (
    <Container>
      <h1>Я DASHBOARD</h1>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
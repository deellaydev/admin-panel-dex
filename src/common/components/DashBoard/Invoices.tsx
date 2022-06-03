import React from 'react';
import styled from "styled-components";
import {DashboardHeader} from "./DashboardHeader";
import {Button, Tabs} from 'antd';

export const Invoices = () => {

  const { TabPane } = Tabs;

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <Tabs defaultActiveKey="1">
          <TabPane tab="All invoices" key="allInvoices">
            All invoices
          </TabPane>
          <TabPane tab="Due" key="due">
            Due
          </TabPane>
          <TabPane tab="Paid" key="paid">
            Paid
          </TabPane>
          <TabPane tab="Unpaid" key="unpaid">
            Unpaid
          </TabPane>
          <TabPane tab="Archived" key="archived">
            Archived
          </TabPane>
        </Tabs>
        <Button type={"primary"} size={"large"}>+ Add new invoice</Button>
      </HeaderContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 30px;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

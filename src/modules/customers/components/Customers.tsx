import React, {useEffect} from 'react';
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import styled from "styled-components";
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {Button, Tabs} from "antd";
import {CustomersWrapper} from "./CustomersWrapper";
import {TableComponent} from "../../../common/components/DashBoard/TableComponent";
import {useAppSelector} from "../../../store/hooks/hooks";
import {Seekers} from "./seekers/Seekers";
import {Employees} from "./employees/Employees";

export const Customers = () => {

  const { TabPane } = Tabs;

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <StyledTabs defaultActiveKey="1" >
          <TabPane tab="Employees" key="employees">
            <TabWrapperComponent>
              <Employees/>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Seekers" key="seekers">
            <TabWrapperComponent>
                <Seekers/>
            </TabWrapperComponent>
          </TabPane>
        </StyledTabs>
      </HeaderContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 30px 0 30px;
  background: #fff;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav{
    margin-bottom: 0;
  }
`
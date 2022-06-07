import React from 'react';
import styled from "styled-components";
import {Tabs} from "antd";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {AccountForm} from "./account/AccountForm";
import {ChangePassword} from "./account/ChangePassword";

export const Settings = () => {

  const {TabPane} = Tabs;

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <StyledTabs>
          <TabPane tab={"Account"} key={"account"}>
            <TabWrapperComponent>
              <AccountForm/>
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
  .ant-tabs-nav {
    margin-bottom: 0;
  }
`
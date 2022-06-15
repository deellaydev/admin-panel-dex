import React from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {Tabs} from "antd";
import {Help} from "./help/Help";
import {Contacts} from "./contacts/Contacts";

export const Contact = () => {

  const {TabPane} = StyledTabs


  return (
    <Container>
      <DashboardHeader/>
      <StyledTabs defaultActiveKey={"1"}>
        <TabPane tab={"Help"} key={"help"}>
          <TabWrapperComponent>
            <Help/>
          </TabWrapperComponent>
        </TabPane>
        <TabPane tab={"Contacts"} key={"contacts"}>
          <TabWrapperComponent>
            <Contacts/>
          </TabWrapperComponent>
        </TabPane>
      </StyledTabs>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 30px 0 30px;
  background: #fff;
`
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;
  }
`
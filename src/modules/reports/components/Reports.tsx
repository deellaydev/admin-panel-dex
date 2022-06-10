import React, {useEffect} from 'react';
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import styled from "styled-components";
import {List, Tabs} from "antd";
import {ReportsFileCard} from "./ReportsFileCard";
import {useAppDispatch, useAppSelector} from "../../../store/reduxHooks";
import {getReportsAction} from "../reportsAsyncAction";
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";

export const Reports = () => {

  const {TabPane} = Tabs;

  const dispatch = useAppDispatch()
  const {reports} = useAppSelector((state) => state.reportsReducer)

  useEffect(() => {
    let timerId = setTimeout(async function request() {
      dispatch(getReportsAction())
      timerId = setTimeout(request, 10000)
    }, 0)
    return (() => clearTimeout(timerId))
  }, [])

  return (
    <Container>
      <DashboardHeader/>
      <StyledTabs defaultActiveKey="1">
        <TabPane tab="Files" key="files">
          <TabWrapperComponent>
            <List
              itemLayout={"vertical"}
              size={"large"}
              pagination={{
                pageSize: 5,
              }}
              dataSource={reports.filter((item) => item.title !== 'Sound')}
              renderItem={(item) => (
                <ReportsFileCard title={item.title} fileId={item.fileId}/>
              )}/>
          </TabWrapperComponent>
        </TabPane>
        <TabPane tab="Sound" key="sound">
          <TabWrapperComponent>
            <List
              itemLayout={"vertical"}
              size={"large"}
              pagination={{
                pageSize: 5,
              }}
              dataSource={reports.filter((item) => item.title === 'Sound')}
              renderItem={(item) => (
                <ReportsFileCard title={item.title} fileId={item.fileId}/>
              )}/>
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
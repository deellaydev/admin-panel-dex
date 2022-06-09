import React, {useEffect} from 'react';
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import styled from "styled-components";
import {List, Tabs} from "antd";
import {ReportsFileCard} from "./ReportsFileCard";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
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
              renderItem={(item, i) => (
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
              renderItem={(item, i) => (
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
const ReportsWrapper = styled.div`
  height: calc(100vh - 160px);
  background: #fff;
  border-radius: 15px;
  position: absolute;
  width: calc(100vw - 260px);
  margin-top: 20px;
  padding: 15px;
  @media (max-width: 900px) {
    width: calc(100vw - 50px);
  }
`
const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;
  }
`
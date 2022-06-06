import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {Button, Spin, Table, Tabs} from 'antd';
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {NewInvoicesForm} from "./NewInvoicesForm";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {getAllInvoices} from "../invoicesAsyncAction";
import {columns, getDataSource, IDataSource} from "./InvoicesTableColumns";
import {TableComponent} from "../../../common/components/DashBoard/TableComponent";


export const Invoices = () => {

  const { TabPane } = Tabs;
  const { loading, error, invoices } = useAppSelector((state) => state.invoicesReducer)
  const dispatch = useAppDispatch();

  const [isActiveModal, setActiveModal] = useState(false);
  const [dataSource, setDataSource] = useState<Array<IDataSource>>([])

  const handleModalToggle = () => {
    setActiveModal(!isActiveModal)
  }

  useEffect(() => {
    setDataSource(getDataSource(invoices))
  }, [invoices])

  const handleTabChange = (e: any) => {
    dispatch(getAllInvoices(e))
  }

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <StyledTabs defaultActiveKey="1" onChange={handleTabChange}>
          <TabPane tab="All invoices" key="">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} dataSource={dataSource}/>
                <NewInvoicesForm isActiveModal={isActiveModal} setActiveModal={handleModalToggle}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Due" key="due">
            <TabWrapperComponent>
              <p>Due</p>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Paid" key="paid">
            <TabWrapperComponent>
              <p>Paid</p>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Unpaid" key="/invoices?isPayment=false">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} dataSource={dataSource}/>
                <NewInvoicesForm isActiveModal={isActiveModal} setActiveModal={handleModalToggle}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Archived" key="archived">
            <TabWrapperComponent>
              <p>Archived</p>
            </TabWrapperComponent>
          </TabPane>
        </StyledTabs>
        <Button type={"primary"} size={"large"} onClick={handleModalToggle}>+ Add new invoice</Button>
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
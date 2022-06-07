import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {Button, Modal, Tabs} from 'antd';
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {NewInvoicesForm} from "./NewInvoicesForm";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {getAllInvoices} from "../invoicesAsyncAction";
import {TableComponent} from "../../../common/components/DashBoard/TableComponent";
import {IInvoice} from "../../../api/dto/invoices";

export const invoicesColumns = [
  {
    title: 'Номер счёта',
    dataIndex: 'id',
    key: 'id',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Имя счёта',
    dataIndex: 'nameInvoice',
    key: 'nameInvoice',
  },
  {
    title: 'Сумма счёта',
    dataIndex: 'valueInvoice',
    key: 'valueInvoice',
    sorter: (a: IInvoice, b: IInvoice) => Number(a.valueInvoice.slice(0, -1)) - Number(b.valueInvoice.slice(0, -1)),
  },
  {
    title: 'Статус счёта',
    dataIndex: 'isPayment',
    key: 'isPayment',
    render: (status: boolean) => status ? <p style={{color: "green"}}>Выплачено</p> :
      <p style={{color: "red"}}>Ожидается выплата</p>
  },
  {
    title: 'Дата выплаты',
    dataIndex: 'paymentDate',
    key: 'paymentDate'
  }
];


export const Invoices = () => {

  const {TabPane} = Tabs;
  const {loading, error, invoices} = useAppSelector((state) => state.invoicesReducer)
  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getAllInvoices())
  }, [])

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <StyledTabs defaultActiveKey="1">
          <TabPane tab="All invoices" key="">
            <TabWrapperComponent>
              <TableComponent loading={loading} columns={invoicesColumns} dataSource={invoices}/>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Due" key="due">
            <TabWrapperComponent>
              <p>Due</p>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Paid" key="paid">
            <TabWrapperComponent>
              <TableComponent loading={loading} columns={invoicesColumns}
                              dataSource={invoices.filter(el => el.isPayment)}/>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Unpaid" key="/invoices?isPayment=false">
            <TabWrapperComponent>
              <TableComponent loading={loading} columns={invoicesColumns}
                              dataSource={invoices.filter(el => !el.isPayment)}/>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Archived" key="archived">
            <TabWrapperComponent>
              <p>Archived</p>
            </TabWrapperComponent>
          </TabPane>
        </StyledTabs>
        <Button type={"primary"} size={"large"} onClick={showModal}>+ Add new invoice</Button>
      </HeaderContainer>
      <NewInvoicesForm handleCancel={handleCancel} isModalVisible={isModalVisible}/>
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
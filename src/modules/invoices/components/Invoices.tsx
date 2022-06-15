import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {Button, Tabs} from 'antd';
import {TabWrapperComponent} from "../../../common/components/DashBoard/TabWrapperComponent";
import {NewInvoicesForm} from "./NewInvoicesForm";
import {useAppDispatch, useAppSelector} from "../../../store/reduxHooks";
import {getAllInvoicesAction} from "../invoicesAsyncAction";
import {TableComponent} from "../../../common/components/DashBoard/TableComponent";
import {IInvoice} from "../../../api/dto/invoices";
import moment from "moment";
import {InvoicesCardWrapper} from "./InvoicesCardWrapper";
import {InvoiceCard} from "./InvoiceCard";

export const Invoices = () => {

  const invoicesColumns = [
    {
      title: 'Номер счёта',
      dataIndex: 'id',
      key: 'id',
      render: (text: string, record: IInvoice) => <a onClick={() => showModalInvoice(record)}>{text}</a>
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
      key: 'paymentDate',
      render: (timestamp: number) => {
        const date = new Date(timestamp);

        return <p>{moment(date).calendar()}</p>
      }
    }
  ];

  const {TabPane} = Tabs;
  const {loading, invoices} = useAppSelector((state) => state.invoicesReducer)
  const dispatch = useAppDispatch();

  const [isModalInvoiceVisible, setIsModalInvoiceVisible] = useState<boolean>(false);
  const [modalInvoiceData, setModalInvoiceData] = useState<IInvoice>();

  const showModalInvoice = (invoice: IInvoice) => {
    setIsModalInvoiceVisible(true);
    setModalInvoiceData(invoice)
  };

  const [isModalAddInvoiceVisible, setIsModalAddInvoiceVisible] = useState<boolean>(false);

  const showAddInvoiceModal = () => {
    setIsModalAddInvoiceVisible(true);
  };

  useEffect(() => {
    dispatch(getAllInvoicesAction())
  }, [])

  return (
    <Container>
      <DashboardHeader/>
      <HeaderContainer>
        <StyledTabs defaultActiveKey="1">
          <TabPane tab="All invoices" key="">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} columns={invoicesColumns} dataSource={invoices}/>
                <InvoicesCardWrapper invoices={invoices}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Due" key="due">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} columns={invoicesColumns}
                                dataSource={invoices.filter(el => el.isDue)}/>
                <InvoicesCardWrapper invoices={invoices.filter(el => el.isDue)}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Paid" key="paid">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} columns={invoicesColumns}
                                dataSource={invoices.filter(el => el.isPayment)}/>
                <InvoicesCardWrapper invoices={invoices.filter(el => el.isPayment)}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Unpaid" key="/invoices?isPayment=false">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} columns={invoicesColumns}
                                dataSource={invoices.filter(el => !el.isPayment)}/>
                <InvoicesCardWrapper invoices={invoices.filter(el => !el.isPayment)}/>
              </>
            </TabWrapperComponent>
          </TabPane>
          <TabPane tab="Archived" key="archived">
            <TabWrapperComponent>
              <>
                <TableComponent loading={loading} columns={invoicesColumns}
                                dataSource={invoices.filter(el => el.isArchived)}/>
                <InvoicesCardWrapper invoices={invoices.filter(el => el.isArchived)}/>
              </>
            </TabWrapperComponent>
          </TabPane>
        </StyledTabs>
        <Button type={"primary"} size={"large"} onClick={showAddInvoiceModal}>+ Add new invoice</Button>
      </HeaderContainer>
      <InvoiceCard isModalVisible={isModalInvoiceVisible} setIsModalVisible={setIsModalInvoiceVisible}
                   invoice={modalInvoiceData}/>
      <NewInvoicesForm setIsModalVisible={setIsModalAddInvoiceVisible} isModalVisible={isModalAddInvoiceVisible}/>
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
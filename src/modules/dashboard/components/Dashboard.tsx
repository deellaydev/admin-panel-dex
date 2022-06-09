import React, {useEffect} from 'react';
import styled from "styled-components";
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import {CustomersDiagram, IInvoicesDiagram} from "./DashBoardData";
import {Pie} from "@ant-design/charts";
import {useAppDispatch, useAppSelector} from "../../../store/hooks/hooks";
import {getAllEmployeesAction, getAllSeekersAction} from "../../customers/customersAsyncAction";
import {getAllInvoicesAction} from "../../invoices/invoicesAsyncAction";

export const Dashboard = () => {

  const dispatch = useAppDispatch()

  const {employees, seekers} = useAppSelector((state) => state.customersReducer)
  const {invoices} = useAppSelector((state) => state.invoicesReducer)

  useEffect(() => {
    dispatch(getAllEmployeesAction())
    dispatch(getAllSeekersAction())
    dispatch(getAllInvoicesAction())
  }, [])

  return (
    <Container>
      <DashboardHeader/>
      <DashboardWrapper>
        <DiagramsWrapper>
          <StyledPie data={CustomersDiagram({countEmployee: employees.length, countSeekers: seekers.length})}
                     angleField={'value'} colorField={'type'}
                     label={
                       {
                         type: 'outer',
                         content: '{name} {percentage}'
                       }
                     } radius={0.8}/>
          <StyledPie data={IInvoicesDiagram({
            countDue: invoices.filter((invoice) => invoice.isDue).length,
            countPayment: invoices.filter((invoice) => invoice.isPayment).length,
            countNoPayment: invoices.filter((invoice) => !invoice.isPayment).length,
            countArchived: invoices.filter((invoice) => invoice.isArchived).length
          })}

                     angleField={'value'} colorField={'type'}
                     label={
                       {
                         type: 'outer',
                         content: '{name} {percentage}'
                       }
                     } radius={0.8}/>
        </DiagramsWrapper>
      </DashboardWrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 30px 30px 0 30px;
  background: #fff;
`
const DashboardWrapper = styled.div`
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
const StyledPie = styled(Pie)`
  width: 45%;
  height: 350px;
`
const DiagramsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
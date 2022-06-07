import React, {FC} from 'react';
import moment from "moment";
import {Card} from "antd";
import {IInvoice} from "../../../api/dto/invoices";
import styled from "styled-components";

interface IProps {
  invoice: IInvoice
}

export const InvoiceCard: FC<IProps> = ({invoice}) => {
  return (
    <StyledCard title={`Счёт номер #${invoice.id}`}>
      <p><strong>Имя счёта:</strong>  {invoice.nameInvoice}</p>
      <p><strong>Сумма счёта:</strong> {invoice.valueInvoice}</p>
      <div style={{display: "flex"}}><strong>Статус счёта:</strong> {invoice.isPayment ? <p style={{color: "green"}}>Выплачено</p> :
        <p style={{color: "red"}}>Ожидается выплата</p>}</div>
      <p><strong>Дата выплаты:</strong> {moment(new Date(invoice.paymentDate)).calendar()}</p>
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  margin-bottom: 15px;
`
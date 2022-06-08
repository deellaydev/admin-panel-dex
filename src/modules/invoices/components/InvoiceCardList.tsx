import React, {FC} from 'react';
import moment from "moment";
import {Button, Card, message, Popconfirm} from "antd";
import {IInvoice} from "../../../api/dto/invoices";
import styled from "styled-components";
import {archiveInvoiceAction, deleteInvoiceAction} from "../invoicesAsyncAction";
import {deleteInvoice} from "../invoicesSlice";
import {useAppDispatch} from "../../../store/hooks/hooks";

interface IProps {
  invoice: IInvoice
}

export const InvoiceCardList: FC<IProps> = ({invoice}) => {

  const dispatch = useAppDispatch()

  const handleArchiveInvoice = async () => {
    await dispatch(archiveInvoiceAction({data: invoice, success: () => message.success("Счёт заархивирован")}))
  }

  const handleDeleteInvoice = async () => {
    await dispatch(deleteInvoiceAction({id: invoice?.id || -1, success: () => message.success("Счёт удалён"), cb: () => dispatch(deleteInvoice(invoice?.id))}))
  }

  return (
    <StyledCard title={`Счёт номер #${invoice.id}`} extra={
      !invoice?.isArchived ?
        <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет"
                    onConfirm={handleArchiveInvoice}>
          <Button size={"small"} type={"primary"} key={"archiveInvoice"}>Архивировать счёт</Button>
        </Popconfirm> :
        <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteInvoice}>
          <Button size={"small"} type={"primary"} key={"deleteInvoice"}>Удалить счёт</Button>
        </Popconfirm>
    }>
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
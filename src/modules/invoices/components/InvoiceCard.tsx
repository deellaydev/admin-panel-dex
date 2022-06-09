import React, {FC} from 'react';
import {IInvoice} from "../../../api/dto/invoices";
import {useAppDispatch} from "../../../store/hooks/hooks";
import {archiveInvoiceAction, deleteInvoiceAction} from "../invoicesAsyncAction";
import {Button, message, Modal, Popconfirm} from "antd";
import moment from "moment";
import {deleteInvoice} from "../invoicesSlice";

interface IProps {
  invoice: IInvoice | undefined;
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const InvoiceCard: FC<IProps> = ({invoice, isModalVisible, setIsModalVisible}) => {

  const dispatch = useAppDispatch()

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleArchiveInvoice = async () => {
    await dispatch(archiveInvoiceAction({data: invoice, success: () => message.success("Счёт заархивирован")}))
    setIsModalVisible(false)
  }

  const handleDeleteInvoice = async () => {
    await dispatch(deleteInvoiceAction({
      id: invoice?.id || -1,
      success: () => message.success("Счёт удалён"),
      cb: () => dispatch(deleteInvoice(invoice?.id))
    }))
    setIsModalVisible(false)
  }

  return (
    <Modal title={`Информация о счёте #${invoice?.id}`} visible={isModalVisible} onCancel={handleCancel} footer={[
      !invoice?.isArchived ?
        <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет"
                    onConfirm={handleArchiveInvoice}>
          <Button size={"large"} type={"primary"} key={"archiveInvoice"}>Архивировать счёт</Button>
        </Popconfirm> :
        <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteInvoice}>
          <Button size={"large"} type={"primary"} key={"deleteInvoice"}>Удалить счёт</Button>
        </Popconfirm>]}>
      <p><strong>Имя счёта:</strong> {invoice?.nameInvoice}</p>
      <p><strong>Сумма счёта:</strong> {invoice?.valueInvoice}</p>
      <p><strong>Дата выплаты:</strong> {invoice ? moment(new Date(invoice?.paymentDate)).calendar() : ''}</p>
      <div style={{display: "flex"}}><strong>Статус выплаты:</strong> {invoice?.isPayment ?
        <p style={{color: "green"}}>Выплачено</p> :
        <p style={{color: "red"}}>Ожидается выплата</p>}
      </div>
      <div style={{display: "flex"}}><strong>Надлежащий счёт:</strong> {invoice?.isDue ?
        <p style={{color: "green"}}>Да</p> :
        <p style={{color: "red"}}>Нет</p>}</div>
      <div style={{display: "flex"}}><strong>Архивирован:</strong> {invoice?.isArchived ?
        <p style={{color: "green"}}>Да</p> :
        <p style={{color: "red"}}>Нет</p>}</div>
    </Modal>
  );
};

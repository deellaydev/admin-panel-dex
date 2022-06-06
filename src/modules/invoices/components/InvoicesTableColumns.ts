import {IInvoice} from "../../../api/dto/invoices";

export const columns = [
  {
    title: 'Номер счёта',
    dataIndex: 'invoicesID',
    key: 'invoicesID',
  },
  {
    title: 'Имя счёта',
    dataIndex: 'invoicesName',
    key: 'invoicesName',
  },
  {
    title: 'Сумма счёта',
    dataIndex: 'invoicesValue',
    key: 'invoicesValue',
  },
  {
    title: 'Статус счёта',
    dataIndex: 'invoicesStatus',
    key: 'invoicesStatus'
  },
  {
    title: 'Дата выплаты',
    dataIndex: 'paymentDate',
    key: 'paymentDate'
  }
];

export interface IDataSource {
  key: number | undefined,
  invoicesID: number | undefined,
  invoicesName: string,
  invoicesValue: string,
  invoicesStatus: string,
  paymentDate: string
}

export const getDataSource = (data: Array<IInvoice>) => {
  return data.map((invoice) => {
    return {
      key: invoice.id,
      invoicesID: invoice.id,
      invoicesName: invoice.nameInvoice,
      invoicesValue: invoice.valueInvoice,
      invoicesStatus: invoice.isPayment ? "Выплачено" : "Ожидается выплата",
      paymentDate: invoice.paymentDate
    }
  })
}
interface ICustomersDiagram {
  countEmployee: number,
  countSeekers: number
}

export const CustomersDiagram = ({countEmployee, countSeekers}: ICustomersDiagram) => {

  return [
    {
      type: "Сотрудники",
      value: countEmployee
    },
    {
      type: "Соискатели",
      value: countSeekers
    }
  ]
}

interface IInvoicesDiagram {
  countDue: number
  countPayment: number
  countNoPayment: number
  countArchived: number
}

export const IInvoicesDiagram = ({countDue, countPayment, countNoPayment, countArchived}: IInvoicesDiagram) => {

  return [
    {
      type: "Надлежащие",
      value: countDue
    },
    {
      type: "Выплаченные",
      value: countPayment
    },
    {
      type: "Не выплаченные",
      value: countNoPayment
    },
    {
      type: "Архивировано",
      value: countArchived
    }
  ]
}
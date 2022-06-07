

export interface IInvoice {
  nameInvoice: string
  valueInvoice: string
  paymentDate: number
  isPayment: boolean
  isDue: boolean
  isArchived: boolean
  id?: number
}
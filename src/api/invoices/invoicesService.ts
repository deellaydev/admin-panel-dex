import {IInvoice} from "../dto/invoices";
import {get, post, put, remove} from "../baseRequest";

export class InvoicesService {

  async addNewInvoice (data: string) {
    return await post('/invoices', data)
  }

  async getAllInvoices () {
    return await get( '/invoices')
  }

  async archiveInvoice (data: IInvoice | undefined) {
    return await put(`/invoices/${data?.id}`, JSON.stringify(data))
  }

  async deleteInvoice (id: number) {
    return await remove(`/invoices/${id}`)
  }

}
import {IInvoice} from "../dto/invoices";
import {get, post} from "../baseRequest";

export class InvoicesService {

  async addNewInvoice (data: string) {
    return await post('/invoices', data)
  }

  async getAllInvoices () {
    return await get( '/invoices')
  }

}
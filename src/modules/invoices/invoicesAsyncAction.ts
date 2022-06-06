import {createAsyncThunk} from "@reduxjs/toolkit";
import {InvoicesService} from "../../api/invoices/invoicesService";
import {IInvoice} from "../../api/dto/invoices";

export const addNewInvoices = createAsyncThunk(
  "invoices/new",
  async (data: IInvoice) => {
    return await new InvoicesService().addNewInvoice(JSON.stringify(data));
  }
)

export const getAllInvoices = createAsyncThunk(
  "invoices/getAll",
  async () => {
    return await new InvoicesService().getAllInvoices()
  }
)

export const getUnpaidInvoices = createAsyncThunk(
  "invoices/getUnpaid",
  async () => {
    return
  }
)
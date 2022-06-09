import {createAsyncThunk} from "@reduxjs/toolkit";
import {InvoicesService} from "../../api/invoices/invoicesService";
import {IInvoice} from "../../api/dto/invoices";

export const addNewInvoicesAction = createAsyncThunk<IInvoice, IInvoice>(
  "invoices/new",
  async (data) => {
    return await new InvoicesService().addNewInvoice(JSON.stringify(data));
  }
)

export const getAllInvoicesAction = createAsyncThunk(
  "invoices/getAll",
  async () => {
    return await new InvoicesService().getAllInvoices()
  }
)

export const archiveInvoiceAction = createAsyncThunk<IInvoice, {data: IInvoice | undefined, success: () => void}>(
  "invoices/archiveInvoice",
  async ({data, success}) => {
    if (data) {
      const archivedInvoice = {
        ...data,
        isArchived: true
      }
      success();
      return await new InvoicesService().archiveInvoice(archivedInvoice)
    }
  }
)

export const deleteInvoiceAction = createAsyncThunk<void, {id: number, success: () => void, cb: () => void}>(
  "invoices/deleteInvoice",
  async ({id, success, cb}) => {
    await new InvoicesService().deleteInvoice(id);
    success();
    cb();
  }
)
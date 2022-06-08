import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {IInvoice} from "../../api/dto/invoices";
import {addNewInvoices, archiveInvoiceAction, deleteInvoiceAction, getAllInvoices} from "./invoicesAsyncAction";

interface IInvoicesState {
  invoices: Array<IInvoice>
  loading: boolean;
  error: string | undefined;
}

const initialState: IInvoicesState = {
  invoices: [],
  loading: false,
  error: undefined
}

export const InvoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    deleteInvoice(state, action){
      state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload)
    }
  },
  extraReducers: (builder => {
      builder.addCase(addNewInvoices.pending, (state) => {
        state.loading = true;
        state.error = undefined
      });
      builder.addCase(addNewInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices.push(action.payload);
      });
      builder.addCase(getAllInvoices.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      });
      builder.addCase(getAllInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices = action.payload;
      });
      builder.addCase(archiveInvoiceAction.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      });
      builder.addCase(archiveInvoiceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices = state.invoices.map((invoice) => {
          if (invoice.id === action.payload.id) {
            return action.payload
          } else {
            return invoice
          }
        })
      });
      builder.addCase(deleteInvoiceAction.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      });
      builder.addCase(deleteInvoiceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
      })
      builder.addMatcher(isError, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    }
  )
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}

export const { deleteInvoice } = InvoicesSlice.actions
export default InvoicesSlice.reducer
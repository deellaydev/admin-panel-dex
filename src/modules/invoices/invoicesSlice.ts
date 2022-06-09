import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {IInvoice} from "../../api/dto/invoices";
import {
  addNewInvoicesAction,
  archiveInvoiceAction,
  deleteInvoiceAction,
  getAllInvoicesAction
} from "./invoicesAsyncAction";

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
    deleteInvoice(state, action) {
      state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload)
    },
    clearErrorInvoice (state) {
      state.error = undefined;
    }
  },
  extraReducers: (builder => {
      builder.addCase(addNewInvoicesAction.pending, (state) => {
        state.loading = true;
        state.error = undefined
      });
      builder.addCase(addNewInvoicesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices.push(action.payload);
      });
      builder.addCase(getAllInvoicesAction.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      });
      builder.addCase(getAllInvoicesAction.fulfilled, (state, action) => {
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
      });
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

export const {deleteInvoice, clearErrorInvoice} = InvoicesSlice.actions
export default InvoicesSlice.reducer
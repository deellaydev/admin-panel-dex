import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
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

const isRequestAction = isAsyncThunkAction(addNewInvoicesAction, archiveInvoiceAction, deleteInvoiceAction, getAllInvoicesAction)

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
      builder.addCase(addNewInvoicesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices.push(action.payload);
      });
      builder.addCase(getAllInvoicesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.invoices = action.payload;
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
      builder.addMatcher(isError, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder.addMatcher(isLoading, (state) => {
        state.loading = true;
        state.error = undefined;
      });
      builder.addMatcher(isComplete, (state) => {
        state.loading = false;
        state.error = undefined;
      })
    }
  )
})

function isError(action: AnyAction) {
  if (isRequestAction(action)) {
    return action.type.endsWith('rejected')
  }
  return false;
}
function isLoading(action: AnyAction) {
  if (isRequestAction(action)) {
    return action.type.endsWith('pending')
  }
  return false;
}
function isComplete(action: AnyAction) {
  if (isRequestAction(action)) {
    return action.type.endsWith('fulfilled')
  }
  return false;
}

export const {deleteInvoice, clearErrorInvoice} = InvoicesSlice.actions
export default InvoicesSlice.reducer
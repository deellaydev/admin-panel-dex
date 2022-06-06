import {createSlice} from "@reduxjs/toolkit";
import {IInvoice} from "../../api/dto/invoices";
import {addNewInvoices, getAllInvoices} from "./invoicesAsyncAction";
import {at} from "json-server-auth";



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
  reducers: {},
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
    builder.addCase(addNewInvoices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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
    builder.addCase(getAllInvoices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    }
  )
})

export default InvoicesSlice.reducer
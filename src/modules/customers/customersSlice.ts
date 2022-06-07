import {createSlice} from "@reduxjs/toolkit";
import {IEmployee, IEmployeeResponse, ISeeker, ISeekerResponse} from "../../api/dto/customers";
import {addNewSeeker, deleteEmployee, getAllEmployees, getAllSeekers} from "./customersAsyncAction";

interface ICustomersState {
  seekers: Array<ISeekerResponse>,
  employees: Array<IEmployeeResponse>,
  loading: boolean;
  error: string | undefined;
}

const initialState: ICustomersState = {
  seekers: [],
  employees: [],
  loading: false,
  error: undefined
}

export const CustomersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {

  },
  extraReducers: (builder => {
    builder.addCase(getAllSeekers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllSeekers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers = action.payload
    });
    builder.addCase(getAllSeekers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllEmployees.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.employees = action.payload
    });
    builder.addCase(getAllEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addNewSeeker.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(addNewSeeker.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers.push(action.payload)
    });
    builder.addCase(addNewSeeker.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  })
})

export default CustomersSlice.reducer
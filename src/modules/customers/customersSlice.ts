import {createSlice} from "@reduxjs/toolkit";
import {IEmployee, IEmployeeResponse, ISeeker, ISeekerResponse} from "../../api/dto/customers";
import {
  addNewSeekerAction,
  addNewEmployeeAction,
  deleteEmployeeAction,
  deleteSeekerAction,
  getAllEmployeesAction,
  getAllSeekersAction

} from "./customersAsyncAction";
import {AuthSlice} from "../auth/authSlice";

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
    deleteEmployee(state, action){
      state.employees = state.employees.filter((employee) => employee.id !== action.payload)
    },
    deleteSeeker(state, action){
      state.seekers = state.seekers.filter((seeker) => seeker.id !== action.payload)
    }
  },
  extraReducers: (builder => {
    builder.addCase(getAllSeekersAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllSeekersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers = action.payload
    });
    builder.addCase(getAllSeekersAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllEmployeesAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllEmployeesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.employees = action.payload
    });
    builder.addCase(getAllEmployeesAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addNewSeekerAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(addNewSeekerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers.push(action.payload)
    });
    builder.addCase(addNewSeekerAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addNewEmployeeAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(addNewEmployeeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.employees.push(action.payload)
    });
    builder.addCase(addNewEmployeeAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteEmployeeAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(deleteEmployeeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deleteEmployeeAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  })
})

export const {deleteEmployee, deleteSeeker} = CustomersSlice.actions
export default CustomersSlice.reducer
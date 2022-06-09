import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
import {IEmployeeResponse, ISeekerResponse} from "../../api/dto/customers";
import {
  addNewSeekerAction,
  addNewEmployeeAction,
  deleteEmployeeAction,
  deleteSeekerAction,
  getAllEmployeesAction,
  getAllSeekersAction

} from "./customersAsyncAction";

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

const isRequestAction = isAsyncThunkAction(addNewSeekerAction, addNewEmployeeAction, deleteSeekerAction, deleteEmployeeAction, getAllSeekersAction, getAllEmployeesAction)

export const CustomersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    deleteEmployee(state, action){
      state.employees = state.employees.filter((employee) => employee.id !== action.payload)
    },
    deleteSeeker(state, action){
      state.seekers = state.seekers.filter((seeker) => seeker.id !== action.payload)
    },
    clearErrorCustomers (state) {
      state.error = undefined;
    }
  },
  extraReducers: (builder => {
    builder.addCase(getAllSeekersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers = action.payload
    });
    builder.addCase(getAllEmployeesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.employees = action.payload
    });
    builder.addCase(addNewSeekerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.seekers.push(action.payload)
    });
    builder.addCase(addNewEmployeeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.employees.push(action.payload)
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
  })
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

export const {deleteEmployee, deleteSeeker, clearErrorCustomers} = CustomersSlice.actions
export default CustomersSlice.reducer
import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
import {IReportFile} from "../../api/dto/reports";
import {getReportsAction} from "./reportsAsyncAction";

interface IReportsState {
  reports: IReportFile[]
  loading: boolean;
  error: string | undefined;
}

const initialState: IReportsState = {
  reports: [],
  loading: false,
  error: undefined
}

const isRequestAction = isAsyncThunkAction(getReportsAction)

export const ReportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    clearErrorReports (state) {
      state.error = undefined;
    }
  },
  extraReducers: (builder => {
    builder.addCase(getReportsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.reports = action.payload
    });
    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addMatcher(isLoading, (state) => {
      state.loading = true;
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

export const {clearErrorReports} = ReportsSlice.actions
export default ReportsSlice.reducer
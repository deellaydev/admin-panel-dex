import {AnyAction, createSlice} from "@reduxjs/toolkit";
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


export const ReportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    clearErrorReports (state) {
      state.error = undefined;
    }
  },
  extraReducers: (builder => {
    builder.addCase(getReportsAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getReportsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.reports = action.payload
    });
    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  })
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}

export const {clearErrorReports} = ReportsSlice.actions
export default ReportsSlice.reducer
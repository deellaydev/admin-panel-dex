import {createAsyncThunk} from "@reduxjs/toolkit";
import {IReportFile} from "../../api/dto/reports";

export const getReportsAction = createAsyncThunk<IReportFile[], void>(
  "reports/getReports",
  async () => {
    return await fetch(`http://localhost:3002/loadFiles`).then((res) => res.json()).then((files) => files)
  }
)
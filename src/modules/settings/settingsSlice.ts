import {createSlice} from "@reduxjs/toolkit";
import {changePasswordAction, changeUserDataAction} from "./settingsAsyncAction";
import {stat} from "fs";

interface ISettingsState {
  loading: boolean;
  error: string | undefined;
}

const initialState: ISettingsState = {
  loading: false,
  error: undefined
}

export const SettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(changePasswordAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(changePasswordAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(changeUserDataAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(changeUserDataAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      localStorage.setItem('user', JSON.stringify(action.payload))
    });
    builder.addCase(changeUserDataAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
})

export default SettingsSlice.reducer
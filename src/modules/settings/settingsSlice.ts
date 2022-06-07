import {createSlice} from "@reduxjs/toolkit";
import {changePasswordAction} from "./settingsAsyncAction";

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
    })
  }
})

export default SettingsSlice.reducer
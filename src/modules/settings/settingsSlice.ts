import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {changePasswordAction, changeUserDataAction} from "./settingsAsyncAction";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changePasswordAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
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
    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}

export default SettingsSlice.reducer
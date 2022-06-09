import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
import {changePasswordAction, changeUserDataAction} from "./settingsAsyncAction";

interface ISettingsState {
  loading: boolean;
  error: string | undefined;
}

const initialState: ISettingsState = {
  loading: false,
  error: undefined
}

const isRequestAction = isAsyncThunkAction(changeUserDataAction, changePasswordAction)

export const SettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    clearErrorSettings (state) {
      state.error = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
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
    });
    builder.addMatcher(isLoading, (state) => {
      state.loading = true;
      state.error = undefined;
    })
  }
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

export const {clearErrorSettings} = SettingsSlice.actions
export default SettingsSlice.reducer
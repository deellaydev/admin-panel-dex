import {createSlice} from "@reduxjs/toolkit";
import {IUserResponse} from "../../api/dto/auth";
import {changePasswordAction, loginAction, registrationAction, restorePasswordAction} from "./authAsyncAction";

interface IAuthState {
  user: IUserResponse | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: IAuthState = {
  user: null,
  loading: false,
  error: undefined,
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(registrationAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(registrationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    })
    builder.addCase(registrationAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(restorePasswordAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(restorePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      localStorage.setItem("restorePasswordUser", JSON.stringify(action.payload))
    });
    builder.addCase(restorePasswordAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(changePasswordAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    })
    builder.addCase(changePasswordAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})

export default AuthSlice.reducer
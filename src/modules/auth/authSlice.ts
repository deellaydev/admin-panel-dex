import {createSlice} from "@reduxjs/toolkit";
import {IUserResponse} from "../../dto/auth";
import {loginAction} from "./authAsyncAction";
import {log} from "util";

interface IAuthState {
  user: IUserResponse | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: IAuthState = {
  user: null,
  loading: false,
  error: undefined
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.user = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
})

export default AuthSlice.reducer
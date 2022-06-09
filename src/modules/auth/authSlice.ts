import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {IUserResponse} from "../../api/dto/auth";
import {loginAction, registrationAction, restorePasswordAction} from "./authAsyncAction";

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
    signOut (state) {
      state.user = null;
    },
    clearErrorAuth (state) {
      state.error = undefined;
    }
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
    builder.addCase(restorePasswordAction.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(restorePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      localStorage.setItem("restorePasswordUser", JSON.stringify(action.payload))
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

export const {signOut, clearErrorAuth} = AuthSlice.actions

export default AuthSlice.reducer
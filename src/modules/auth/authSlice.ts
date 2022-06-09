import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
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

const isRequestAction = isAsyncThunkAction(loginAction, registrationAction, restorePasswordAction)

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
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    });
    builder.addCase(registrationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    })
    builder.addCase(restorePasswordAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      localStorage.setItem("restorePasswordUser", JSON.stringify(action.payload))
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

export const {signOut, clearErrorAuth} = AuthSlice.actions

export default AuthSlice.reducer
import {AnyAction, createSlice, isAsyncThunkAction} from "@reduxjs/toolkit";
import {IUserResponse} from "../../api/dto/auth";
import {loginAction, registrationAction, restorePasswordAction} from "./authAsyncAction";
import {STATUS} from "../../store/reduxHooks";

interface IAuthState {
  user: IUserResponse | null;
  status: string
}

const initialState: IAuthState = {
  user: null,
  status: STATUS.NEVER
}

const isRequestAction = isAsyncThunkAction(loginAction, registrationAction, restorePasswordAction)

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut (state) {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    });
    builder.addCase(registrationAction.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    })
    builder.addCase(restorePasswordAction.fulfilled, (state, action) => {
      state.status = STATUS.LOADED;
      localStorage.setItem("restorePasswordUser", JSON.stringify(action.payload))
    });
    builder.addMatcher(isLoading, (state) => {
      state.status = STATUS.LOADING;
    })
    builder.addMatcher(isError, (state) => {
      state.status = STATUS.ERROR;
    });
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

export const {signOut} = AuthSlice.actions

export default AuthSlice.reducer
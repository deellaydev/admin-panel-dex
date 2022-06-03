import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILogin} from "../../api/dto/auth";
import {authService} from "../../api/auth/authService";

export const loginAction = createAsyncThunk(
  "auth/signIn",
  async (data: ILogin) => {
    try {

      const response = await new authService().loginService(JSON.stringify(data))
      if (!response) {
        throw new Error('Такого пользователья не существует')
      }
      return response

    } catch (e: any) {
      throw new Error(e.message)
    }
  }
)
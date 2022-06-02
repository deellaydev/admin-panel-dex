import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILogin} from "../../dto/auth";
import {users} from "./users";

export const loginAction = createAsyncThunk(
  "auth/signIn",
  async (data: ILogin) => {
    try {

      const responce = users.users.filter(user => (user.email === data.email && user.password === data.password))[0]
      if (!responce) {
        throw new Error('Такого пользователья не существует')
      }
      return responce

    } catch (e: any) {
      throw new Error(e.message)
    }
  }
)
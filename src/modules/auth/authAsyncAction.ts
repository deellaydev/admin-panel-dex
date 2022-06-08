import {createAsyncThunk} from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserResponse} from "../../api/dto/auth";
import {AuthService} from "../../api/auth/authService";
import moment from "moment";

export const loginAction = createAsyncThunk<IUserResponse, {data: ILogin, navigate: () => void, success: () => void}>(
  "auth/signIn",
  async ({data, navigate, success}) => {
      const response = await new AuthService().loginService(JSON.stringify(data))

      if (!response) {
        throw new Error("Такого пользователя не существует")
      }
      success();
      navigate();
      return response;
  }
)

export const registrationAction = createAsyncThunk<IUserResponse, IRegister>(
  "auth/signUp",
  async (data) => {
    const registerData = {
      email: data.email,
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic,
      password: data.password,
      birthDay: moment(new Date(`${data.yearOfBirth}-${data.monthOfBirth}-${data.dayOfBirth}`)).valueOf(),
      telNumber: data.telNumber || null,
      sex: data.sex
    }

    return await new AuthService().registrationService(JSON.stringify(registerData))
  }
)

export const restorePasswordAction = createAsyncThunk<IUserResponse, {email: string, success: () => void}>(
  "auth/restorePassword",
  async ({email, success}) => {
    const response = await new AuthService().restorePassword(`/users?email=${email}`)

    if (response.length === 0) {
      throw new Error("Неверная почта")
    }
    success()
    return response;
  }
)

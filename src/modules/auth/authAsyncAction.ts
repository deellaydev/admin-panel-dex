import {createAsyncThunk} from "@reduxjs/toolkit";
import {IChangePassword, ILogin, IRegister, IUserResponse} from "../../api/dto/auth";
import {authService} from "../../api/auth/authService";

export const loginAction = createAsyncThunk(
  "auth/signIn",
  async (data: ILogin) => {
    const response = await new authService().loginService(JSON.stringify(data))
    if (!response) {
      throw new Error('Такого пользователья не существует')
    }
    return response
  }
)

export const registrationAction = createAsyncThunk(
  "auth/signUp",
  async (data: IRegister) => {
    const registerData = {
      email: data.email,
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic,
      password: data.password,
      birthDay: data.dayOfBirth + '.' + data.monthOfBirth + '.' + data.yearOfBirth,
      telNumber: data.telNumber,
      sex: data.sex
    }

    const response = await new authService().registrationService(JSON.stringify(registerData))

    if (!response) {
      throw new Error('Такого пользователья не существует')
    }
    return response
  }
)

export const restorePasswordAction = createAsyncThunk(
  "auth/restorePassword",
  async (email: string) => {
    const response = await new authService().restorePassword(`/users?email=${email}`)

    if (response.length === 0) {
      throw new Error("Такого пользователя не существует")
    }
    return response;
  }
)

export const changePasswordAction = createAsyncThunk(
  "auth/changePassword",
  async ({email, password}: IChangePassword) => {
    const body = {
      password: password
    }
    const response = new authService().updatePassword(`/users?email=${email}`, JSON.stringify(body))

    if (!response) {
      throw new Error("Пароль не сменён")
    }
    return response;
  }
)
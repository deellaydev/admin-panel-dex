import {createAsyncThunk} from "@reduxjs/toolkit";
import { ILogin, IRegister, IUserResponse} from "../../api/dto/auth";
import {AuthService} from "../../api/auth/authService";
import moment from "moment";
import {errorNotification, successNotification} from "../../hooks/useNotification";
import {STATUS} from "../../store/reduxHooks";
import {RootState} from "../../store/store";

export const loginAction = createAsyncThunk<IUserResponse, {data: ILogin, navigate: () => void}>(
  "auth/signIn",
  async ({data, navigate}) => {
      const response = await new AuthService().loginService(JSON.stringify(data))

      if (!response) {
        errorNotification("Такого пользователя не существует")
        throw new Error("Такого пользователя не существует")
      }

      successNotification("Вы успешно вошли")
      navigate();
      return response;
  }
)

export const registrationAction = createAsyncThunk<IUserResponse, {data: IRegister,  navigate: () => void}>(
  "auth/signUp",
  async ({data, navigate}) => {
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

    const response = await new AuthService().registrationService(JSON.stringify(registerData))

    if (!response) {
      errorNotification("Регистрация не успешна")
      throw new Error("Регистрация не успешна")
    }

    successNotification("Вы успешно зарегестрированы")
    navigate();

    return response;
  }
)

export const restorePasswordAction = createAsyncThunk<IUserResponse, {email: string, navigate: () => void}>(
  "auth/restorePassword",
  async ({email, navigate}) => {
    const response = await new AuthService().restorePassword(`/users?email=${email}`)

    if (response.length === 0) {
      errorNotification("Неверная почта")
      throw new Error("Неверная почта")
    }
    successNotification("Аккаунт найден", 3).then(() => navigate())
    return response;
  }
)



export const selectorError = (state: RootState) => state.authReducer.status === STATUS.ERROR
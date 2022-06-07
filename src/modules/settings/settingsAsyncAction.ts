import {createAsyncThunk} from "@reduxjs/toolkit";
import {SettingsService} from "../../api/settings/settingsService";
import {IUserResponse} from "../../api/dto/auth";

export const changePasswordAction = createAsyncThunk(
  "settings/changePassword",
  async () => {

  }
)

export const changeUserDataAction = createAsyncThunk(
  "settings/changeUserData",
  async (user: IUserResponse) => {
    return await new SettingsService().changeUserData(user)
  }
)
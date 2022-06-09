import {createAsyncThunk} from "@reduxjs/toolkit";
import {SettingsService} from "../../api/settings/settingsService";
import {IUserResponse} from "../../api/dto/auth";

export const changePasswordAction = createAsyncThunk(
  "settings/changePassword",
  async () => {

  }
)

export const changeUserDataAction = createAsyncThunk<IUserResponse, IUserResponse>(
  "settings/changeUserData",
  async (user) => {
    return await new SettingsService().changeUserData(user)
  }
)
import {IUserResponse} from "../dto/auth";
import {put} from "../baseRequest";

export class SettingsService {

  async changeUserData(user: IUserResponse){
    return await put(`/users/${user.id}`, JSON.stringify(user))
  }

}
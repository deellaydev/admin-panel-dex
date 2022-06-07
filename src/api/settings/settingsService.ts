import {IUserResponse} from "../dto/auth";
import {post} from "../baseRequest";

export class SettingsService {

  async changeUserData(user: IUserResponse){
    return await post(`/users/${user.id}`, JSON.stringify(user))
  }

}
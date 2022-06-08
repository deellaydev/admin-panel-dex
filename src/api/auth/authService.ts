import {get, post} from "../baseRequest";


export class AuthService {

    async loginService(data: string){
        return await post('/login', data);
    }

    async registrationService(data: string) {
        return await post('/register', data);
    }

    async restorePassword(url: string) {
        return await get(url);
    }

}
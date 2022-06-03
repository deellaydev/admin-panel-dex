import {ILogin} from "../dto/auth";
import {post} from "../baseRequest";


export class authService {

    async loginService(data: string){
        return await post('/login', data);
    }

    async registrationService(data: string) {
        return await post('/register', data);
    }

}
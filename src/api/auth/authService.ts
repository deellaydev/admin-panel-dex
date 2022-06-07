import {get, post, put} from "../baseRequest";


export class authService {

    async loginService(data: string){
        return await post('/login', data);
    }

    async registrationService(data: string) {
        return await post('/register', data);
    }

    async restorePassword(url: string) {
        return await get(url);
    }

    async updatePassword(url: string, password: string) {
        return await put(url, password);
    }

    async getUserById(id: number) {
        return await get(`/users/${id}`)
    }

}
import { LoginRequest, RegisterRequest } from "./Types";

class User {
    constructor() {

    }

    async login(request: LoginRequest) {
        console.log('User login');
        return { token: "test" };
    }

    async register(request: RegisterRequest) {
        console.log('User register');
        return { token: "test" };
    }

}

export default User;
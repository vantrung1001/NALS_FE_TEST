import { BaseService } from "./BaseService";

class UserService extends BaseService {
    constructor() {
        super();
    }

    login = (model) => this.post(`/login`, model);
}

export const userService = new UserService();
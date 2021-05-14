import { BaseService } from "./BaseService";

class UserListService extends BaseService {
    constructor() {
        super();
    }

    getListUser = () => this.get(`/users`);
}

export const userListService = new UserListService();
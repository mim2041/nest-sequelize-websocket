import { USERS_REPOSITORY } from "src/core/constants";
import { User } from "./user.entity";


export const usersProviders = [{
    provide: USERS_REPOSITORY,
    useValue: User,
}]
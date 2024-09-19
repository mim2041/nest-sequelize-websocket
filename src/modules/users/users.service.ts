import { Inject, Injectable } from "@nestjs/common";
import { USERS_REPOSITORY } from "src/core/constants";
import { User } from "./user.entity";
import { UserDto } from "./dto/user.dto";


@Injectable()
export class UsersService {
    constructor(@Inject(USERS_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto) : Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll<User>();
    }
}
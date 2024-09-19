import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";



enum role {
    CUSTOMER = 'customer',
    DELIVERY_PERSON = 'delivery_person',
}

export class UserDto {
    @IsNotEmpty()
    readonly firstname: string;

    @IsNotEmpty()
    readonly lastname: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(role, {
        message: `role must be either customer or delivery_person`,
    })
    readonly role: role;
}
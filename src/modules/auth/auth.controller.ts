import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { UserDto } from "../users/dto/user.dto";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() user: any) {
        return this.authService.login(user);
    }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return this.authService.create(user);
    }
}
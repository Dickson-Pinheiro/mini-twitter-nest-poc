import { IsNotEmpty, IsString, Length } from "class-validator"


export class AuthLoginDto {
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(6)
    password: string
}
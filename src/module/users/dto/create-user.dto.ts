import { IsNotEmpty, IsString, Length } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(6)
    password: string
}

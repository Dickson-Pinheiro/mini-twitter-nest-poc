import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    content: string
}

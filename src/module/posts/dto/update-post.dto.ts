import { IsNotEmpty, IsString, IsNumber } from "class-validator"

export class UpdatePostDto {
    
    @IsString()
    @IsNotEmpty()
    content: string
}

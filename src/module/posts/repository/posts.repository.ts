import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";

export abstract class PostsRepository {
    abstract create({content}: CreatePostDto, user_id: number)
    abstract update({content}: UpdatePostDto, id: Number)
    abstract getAll()
    abstract getOne(id: number)
}
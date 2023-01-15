import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    name: String
})

const Posts = models.Posts || model('Posts', postSchema)

export default Posts;






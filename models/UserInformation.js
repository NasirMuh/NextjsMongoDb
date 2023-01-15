import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: String
})

const UserInfo = models.UserInfo || model('UserInfo', UserSchema)

export default UserInfo;

import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
    name: String,
    email: String
})

const Test = models.Test || model('Test', testSchema)

export default Test;






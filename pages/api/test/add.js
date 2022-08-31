import connectMongo from "../../../utils/connectMongo";
import Test from "../../../models/testModel"

export default async function addTest(req, res) {
    try {
        console.log("Connecting to Mongoose")
        await connectMongo()
        console.log("Connected to Mongoose Succesfully")
        console.log("Creating Document")
        const test = await Test.create(req.body)
        console.log("Created Document Succesfully")
        res.json({ test })
        
    } catch (error) {
        console.log(error)
    }

}
import { getUsers, postUser } from "../../../controllers/userInfoController";
import connectMongo from "../../../utils/connectMongo";

export default async function handler(req, res) {
    await connectMongo();

    const { method } = req;
    switch (method) {
        case "GET":
            return getUsers(req, res)
            break;
        case "POST":
            return postUser(req, res)
            break;
        default:
            return res.status(405).json({ message: "this method not allowed" })

    }
}
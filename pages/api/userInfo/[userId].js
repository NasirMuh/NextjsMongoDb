import { getUser, deleteUser } from "../../../controllers/userInfoController";
import connectMongo from "../../../utils/connectMongo";

export default async function handler(req, res) {
    await connectMongo();
    const { method } = req;
    switch (method) {
        case "GET":
            return getUser(req, res)
            break;
        case "DELETE":
            return deleteUser(req, res)
            break;

        default:
            return res.status(405).json({ message: "this method not allowed" })
    }
}
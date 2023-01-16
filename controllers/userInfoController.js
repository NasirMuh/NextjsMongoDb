import connectMongo from "../utils/connectMongo";
import UserInfo from "../models/UserInformation"

export const getUsers = async (req, res) => {
    try {
        await connectMongo()
        const test = await UserInfo.find({})
        if (!test) return res.status(404).json({ message: "Data not found" })
        return res.status(200).json({ success: true, data: test })
    } catch (error) {
        return res.status(405).json({ success: false, message: "Error in fetching" })
    }
}

export const getUser = async (req, res) => {
    const { userId } = req.query;
    try {
        await connectMongo()
        const test = await UserInfo.findById({ _id: userId })
        if (!test) return res.status(404).json({ message: "Data not found" })
        return res.status(200).json({ success: true, data: test })
    } catch (error) {
        return res.status(405).json({ success: false, message: "Error in fetching" })
    }
}

export const postUser = async (req, res) => {
    try {
        await connectMongo()
        const test = await UserInfo.create(req.body)
        return res.status(200).json({ success: true, data: test })
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message })
    }
}






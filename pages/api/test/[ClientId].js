import connectMongo from "../../../utils/connectMongo";
import Test from "../../../models/testModel"

export default async function handler(req, res) {
    const { method } = req;
    const { ClientId } = req.query;
    switch (method) {
        case "GET":
            try {
                await connectMongo()
                const test = await Test.findById({ _id: ClientId })
                res.status(200).json({ success: true, data: test })
            } catch (error) {
                res.status(500).json({ success: false })
            }
            break;

        case "GET":
            try {
                await connectMongo()
                const test = await Test.findOne({ name: ClientId })
                res.status(200).json({ success: true, data: test })
            } catch (error) {
                res.status(500).json({ success: false })
            }
            break;

        case "PUT":
            try {
                const { name, email } = req.body;
                await connectMongo()
                await Test.updateOne({ _id: ClientId }, { name, email })
                res.status(200).json({ success: true, data: req.body })
            } catch (error) {
                res.status(500).json({ success: false, error })
            }
            break;

        case "DELETE":
            try {
                await connectMongo()
                await Test.deleteOne({ _id: ClientId })
                res.status(200).json({ success: true, data: req.body })
            } catch (error) {
                res.status(500).json({ success: false, error })
            }
            break;
    }
}
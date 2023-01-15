import connectMongo from "../../../utils/connectMongo";
import Post from "../../../models/postModel"

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                await connectMongo()
                const test = await Post.find({ })
                res.status(200).json({ success: true, data: test })
            } catch (error) {
                res.status(500).json({ success: false })
            }
            break;

        case "POST":
            try {
                await connectMongo()
                const test = await Post.create(req.body)
                res.status(200).json({ success: true, data: test })
            } catch (error) {
                res.status(500).json({ success: false })
            }
            break;
    }
}
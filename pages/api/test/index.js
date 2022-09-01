// import connectMongo from "../../../utils/connectMongo";
// import Test from "../../../models/testModel"

// export default async function handler(req, res) {
//     const { method } = req;

//     switch (method) {
//         case "GET":
//             try {
//                 await connectMongo()
//                 const test = await Test.find({})
//                 res.status(200).json({ success: true, data: test })
//             } catch (error) {
//                 console.log(error)
//                 res.status(500).json({ success: false, data: test })
//             }
//             break;

//         case "POST":
//             try {
//                 await connectMongo()
//                 const test = await Test.create(req.body)
//                 res.status(200).json({ success: true, data: test })
//             } catch (error) {
//                 console.log(error)
//                 res.status(500).json({ success: false, data: test })
//             }
//             break;
//     }
// }
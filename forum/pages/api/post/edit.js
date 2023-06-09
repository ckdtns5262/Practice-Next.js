
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(req, res) {

    if (req.method === "POST") {
        if (req.body.title === '') {
            res.status(200).json('제목써주세요')
        }
        try {
            const db = (await connectDB).db('forum')
            const result = await db.collection('post').updateOne({ _id: new ObjectId(req.body._id) },
                { $set: { title: req.body.title, content: req.body.content } })
               return res.status(200).redirect(302, '/list')
        } catch (error) {
            console.log(error)  
        }
    }

  
}
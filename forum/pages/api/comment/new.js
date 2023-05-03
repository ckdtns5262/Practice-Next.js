import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(req, res) {

    let session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('forum')
    if (req.method == 'POST') {
        // if (!session) {
        //     res.status(500).json({ Error: '로그인 후 가능합니다' })
        // }
        req.body = JSON.parse(req.body)
        let data = {
            content: req.body.comment,
            parent: new ObjectId(req.body.parent),
            author: session.user.email,
            writer: session.user.name
        }
        let result = db.collection('comment').insertOne(data)
        res.status(200).json(result, '저장완료')




    }
}
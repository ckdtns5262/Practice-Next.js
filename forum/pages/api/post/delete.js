import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function Delete(req, res) {

    if (req.method === "POST") {

        let session = await getServerSession(req, res, authOptions)

        if(session != null){
            const db = (await connectDB).db('forum')
            let find = await db.collection('post').findOne({ _id: new ObjectId(req.body) });

            if (find.author == session.user.email) {

                let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) })
                console.log(result)
                return res.status(200).json('삭제완료')
            } else {
               res.status(500).json({Error : '현재유저와 작성자가 불일치함'})
            } 
        } else if(find.role == 'admin') {
            return res.status(200).json('삭제완료')
        }
    }




    // query string 사용하기
    // console.log(req.query._id)
    // return res.status(200).json

    // URL 파라미터



}
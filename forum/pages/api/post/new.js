import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(req, res) {
   let session = await getServerSession(req, res , authOptions)
   console.log(session.user.email)
    if(session){
        req.body.author = session.user.email
    }
    console.log(req.body)
    if (req.method === 'POST') {
        
        if (req.body.title == '') {
            return res.status(200).json('제목써주셈')
        }
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(req.body)
            return res.redirect(302, '/list')
        } catch (error) {
            console.log(error)
        }


    }
}


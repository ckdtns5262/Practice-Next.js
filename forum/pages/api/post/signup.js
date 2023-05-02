import { connectDB } from "@/util/database";

export default async function SignUp(req, res){

    const db = (await connectDB).db('forum')
    let result = await db.collection('user').insertOne(req.body)
    
    let check = await db.collection('user').findOne({userid : req.body.title})
    
    

    return res.status(200).json('회원가입 완료')

    
    
}
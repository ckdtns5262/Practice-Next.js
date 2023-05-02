import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb";




export default async function handler(req, res) {


    const db = (await connectDB).db('forum')
    const findUserId = await db.collection('user_cred').findOne({userId : req.body.userId})
    const findEmail = await db.collection('user_cred').findOne({email : req.body.email})
    

    if (req.method === "POST") {
        if(req.body.password == ''){
            res.status(500).json({Error : '비밀번호를 입력하세요'})
        } else {
            let hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash
        }
     

    if(findUserId){
        res.status(500).json({Error : '중복된 ID입니다'})
    } else if(findEmail) {
        res.status(500).json({Error : '중복된 Email입니다'})

    } else if(req.body.userId == '') {
        res.status(500).json({Error :'아이디를 입력해주세요'})
    } else if(req.body.email == '') {
        res.status(500).json({Error : 'email를 입력해주세요'})
    }
    else {
        await db.collection('user_cred').insertOne(req.body)
        res.status(200).json('회원가입성공')
    }
    
   


    


      
       
    }
}
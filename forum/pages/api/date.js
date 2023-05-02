import { todayDate } from "@/util/getDate"

export default function Date(req, res){

    if(req.method === 'GET'){
        res.status(200).json(
            '현재날짜 :' + todayDate
         

        )
    }
}
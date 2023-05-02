
import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic'

export default async function List() {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()
    
    result = result.map((name)=>{
        name._id = name._id.toString()
        return name
    })
    return (
        <>
        <div className="list-bg">
            <ListItem result={result}/>
        </div>  
        </>
    )
}
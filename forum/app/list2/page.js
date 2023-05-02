
import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const revalidate = 20

export default async function List2() {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()
    console.log(result)
    return (
        <>
        <div className="list-bg">
            <ListItem result={result}/>
        </div>  
        </>
    )
}
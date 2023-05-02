import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({
        _id: new
            ObjectId(props.params.id)
    })

    return (
        <div className="p-10 text-center text-xl">
            <h4>글 수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input defaultValue={result.title} type="text" name="title" />
                <input defaultValue={result.content} type="text" name="content" />
                <input defaultValue={result._id} style={{ display: "none" }} name="_id" />
                <button type="submit" className="bg-blue-400 rounded-lg h-14 w-14">수정</button>
            </form>
        </div>
    )
}
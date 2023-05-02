import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){

 let session = await getServerSession(authOptions)
    

    return (
        <>
        {session ? <div>
            <h4 className="text-center">글작성 페이지</h4>
            <form action="/api/post/new" method="POST" className="space-y-5">
                <input name="title" className="bg-blue-300 flex " placeholder="Title"/>
                <textarea name="content" className="bg-blue-300 p-20" placeholder="Content"/>
                <button type="submit" className="text-center font-semibold text-white text-[16px]
                mt-6 px-4 py-2 rounded-md bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">버튼</button>
            </form>
        </div> : <div>로그인해주세요</div>}
        </>
    )
}
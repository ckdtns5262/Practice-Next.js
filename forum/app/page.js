import { connectDB } from "@/util/database"

export const revalidate = 60;

export default async function Home() {

  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  // 60초마다 캐싱된 데이터 갱신해줌
  // await fetch('/URL', {next : {revalidate : 60}}) // cache : 'no-store' : 이러면 매번 서버로 요청해서 새거 가져옴
  

  return (  
    <div>안녕</div>
  )
}

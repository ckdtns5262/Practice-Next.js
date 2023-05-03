'use client'
import { useEffect, useState } from "react"

export default function Comment(props){

    const [comment, setComment] = useState('')
    const [data, setData] = useState([])
    const [nComment, setNComment] = useState([])
    // const [likeCount, setLikeCount] = useState(0)
    useEffect(()=>{
      fetch(`/api/comment/list?id=${props._id}`)
      .then(r => r.json())
      .then((res)=>{
        setData(res)
        console.log(data)
      })
    },[])


    return (
      <div>
        <hr></hr>
        <div className="text-lg font-bold mt-4 border border-blue-500 bg-neutral-400">댓글목록 보여줄 부분</div>
        {
          data.length > 0 ? 
          data.map((a, i)=><div className="flex space-x-3" key={i}>
            <p >작성자 : {a.writer}</p>
             <span>{a.content}</span>
             {/* <button onClick={()=>{setLikeCount(likeCount + 1)}}>👍</button>
             <span>{likeCount}</span> */}
     
          </div>
          )
          : '댓글 : 댓글없음'
        }
       
       
        <input onChange={(e)=>{setComment(e.target.value)}}/>
        <button onClick={()=>{
            fetch('/api/comment/new', {method : 'POST', body : JSON.stringify({comment : comment, parent : props._id})}
          ) 
        }}>댓글전송</button>
      </div>
    )
}
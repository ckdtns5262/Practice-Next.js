'use client'

import Link from "next/link";

export default function ListItem({ result }) {

    return (
<div>
    {
        result.map((name, i) =>
            <div className="list-item" key={i} >
                <Link prefetch={false} href={`/detail/${(name._id).toString()}`}><h4>글제목 : {name.title}</h4></Link>
                <Link href={`/edit/${name._id}`}> <button>✏️</button></Link>
                <button onClick={(e) => {
                    // fetch(`api/delete/${name._id}`)

                    fetch('/api/post/delete', { method: 'POST', body: name._id })
                        .then((r) => { r.json() })
                    //        .then((r)=>{
                    //     if (r.status == 200){
                    //         return r.json();
                    //     } else {
                    //         // 서버가 에러코드전송시 실행할코드
                    //         console.log('일치하지않음')
                    //     }
                    //    })
                    //    .then((result)=>{
                    //         // 성공시 실행할 코드
                    //    }).catch((error)=>{
                    //         // 인터넷문제로 실패시 실행할코드
                    //         console.log(error)
                    //    })
                }}>삭제</button>
                <p>글내용 : {name.content}</p>
            </div>
        )}
</div>
)
}
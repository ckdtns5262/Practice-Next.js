'use client'

import {signIn, signOut} from 'next-auth/react'

export default function LoginBtn(){

    return (
        <div className='space-x-4'>
          <button onClick={()=>{signOut()}}>로그아웃</button>

        </div>
    )
}
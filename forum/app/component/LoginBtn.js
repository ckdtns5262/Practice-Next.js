'use client'

import {signIn, signOut} from 'next-auth/react'

export default function LoginBtn(){

    return (
        <div className='space-x-4'>
          <button onClick={()=>{signIn()}}>로그인</button>

        </div>
    )
}
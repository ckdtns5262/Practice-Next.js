


export default function SignUp() {
    return (
        <div className="mt-4">
            <h3 className="text-center text-[20px] font-bold">회원가입 페이지</h3>
            <form action="/api/auth/signup" method="POST" className="m-20 items-center justify-center">
            <h4>ID</h4>
            <input name="userId" placeholder="ID" type="id"/>
            <h4>Email</h4>
            <input name="email" placeholder="Email" type="email"/>
            <h4>password</h4>
            <input name="password" placeholder="password" type="password"/>
            <button className="bg-red-400 w-full rounded hover:bg-red-500 hover:scale-105 py-2 font-semibold">회원가입</button>
            </form>
        </div>
    )
}
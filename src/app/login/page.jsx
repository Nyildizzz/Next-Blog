"use client"
import React from 'react'
import style from "./login.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
function Login() {
  const {data , status} = useSession()
  const router = useRouter()
  

  if(status === "loading"){
    return <div className={style.loading}>
      Loading...
    </div>
  }
  if(status === "authenticated"){
    router.push("/")
  }
  
  
  return (
    <div className={style.container}>
      <h2 className={style.title}>Login Section</h2>
        <div className={style.wrapper}>
            <div onClick={() =>{
              signIn("google")
            }} className={style.socialBtn}>Sign in with Google</div>
            <div className={style.socialBtn}>Sign in with Github</div>
            
        </div>

    </div>
  )
}

export default Login
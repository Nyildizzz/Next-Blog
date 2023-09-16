import React from 'react'
import style from "./login.module.css"

function Login() {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={style.socialBtn}>Sign in with Google</div>
            <div className={style.socialBtn}>Sign in with Github</div>
            <div className={style.socialBtn}>Sign in with Facebook</div>
            
        </div>

    </div>
  )
}

export default Login
import React from "react";
import style from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
function Comments() {
  const status = "authenticated";
  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea
            className={style.input}
            placeholder="Write a comment..."
          ></textarea>
            <button className={style.btn}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        <div className={style.comment}>
            <div className={style.user}>
                <Image className={style.image} width={50} height={50} src="/p1.jpeg" alt="das" />
                <div className={style.userInfo}>
                    <span className={style.username}>John Doe</span>
                    <span className={style.date}>15.09.2023</span>

                </div>
            </div>
            <div className={style.desc}>
                 Lorem ipsum dolor, sit amet consectetur adipisicing.
                 Lorem ipsum dolor, sit amet consectetur adipisicing.
                 Lorem ipsum dolor, sit amet consectetur adipisicing.
                 Lorem ipsum dolor, sit amet consectetur adipisicing.
            </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;

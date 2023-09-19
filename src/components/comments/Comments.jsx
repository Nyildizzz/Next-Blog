"use client";
import React, { useState } from "react";
import style from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message || "failed to load comments");
    throw error;
  }
  return data;
};

function Comments({ postSlug }) {
  const {status} = useSession();
  const { data,mutate,isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");


  const handleSubmit  = async () =>{
    await fetch("/api/comments",{
      method: "POST",
      body: JSON.stringify({desc, postSlug}),
    })
    mutate();
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea
            className={style.input}
            placeholder="Write a comment..."
            onChange={(e)=>setDesc(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit} className={style.btn}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item) => (
            <div className={style.comment} key={item._id}>
              <div className={style.user}>
                {item?.user?.image && (
                  <Image
                  className={style.image}
                  width={50}
                  height={50}
                  src={item.user.image}
                  alt="das"
                />
                )}
                <div className={style.userInfo}>
                  <span className={style.username}>{item.user.name}</span>
                  <span className={style.date}> - {item.createdAt.substring(0,10)}</span>
                </div>
              </div>
              <div className={style.desc}>
                {item.desc}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;

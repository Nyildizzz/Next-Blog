import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
function Card({key,item}) {
  return (
    <div className={style.container} key={key}>
      {item.image && (
        <div className={style.imgContainer}>
        <Image src={item.img} alt="recent post ımage" className={style.img} fill />
     </div>
      )}
      <div className={style.textContainer}>
        <div className={style.detail}>
            <span className={style.date}>{item.createdAt.substring(0,10)} -{""} </span>
            <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
        <h1 className={style.postTitle}>{item.title}</h1>
        </Link>
        <p className={style.desc}>
           {item.desc.substring(0,60)}
        </p>
        <Link href={`/posts/${item.slug}`} className={style.link}>
        Read More</Link>
      </div>
    </div>
  );
}

export default Card;

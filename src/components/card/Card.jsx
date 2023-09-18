import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
function Card({key,item}) {
  return (
    <div className={style.container} key={key}>
      <div className={style.imgContainer}>
        <Image src="/p1.jpeg" alt="recent post ımage" className={style.img} fill />
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
            <span className={style.date}>11.02.2023 - </span>
            <span className={style.category}>Culture </span>
        </div>
        <Link href="/">
        <h1 className={style.postTitle}>{item.title}</h1>
        </Link>
        <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus officia laudantium incidunt doloremque. Eius officia modi in.
            Beatae, quam doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, odit.
        </p>
        <Link href="/" className={style.link}>
        Read More</Link>
      </div>
    </div>
  );
}

export default Card;

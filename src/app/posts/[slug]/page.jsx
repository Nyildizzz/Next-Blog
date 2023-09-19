import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("failed to load categories");
  }
  return res.json();
};

const SinglePage = async ({params}) => {
  const {slug} = params;
  const data = await getData(slug);
 
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {data?.title}
          </h1>
          <div className={styles.user}>
            {data?.user.image && (
              <div className={styles.userImageContainer}> 
              <Image className={styles.avatar} fill src={data.user.image} alt="das"/>
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>15.09.2023</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imgContainer}>
          <Image className={styles.img} fill src="/p1.jpeg" alt="das" />
        </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{__html: data?.desc}} />
           
          
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

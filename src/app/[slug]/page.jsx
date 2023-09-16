import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image className={styles.avatar} fill src="/p1.jpeg" alt="das" />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>15.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill src="/p1.jpeg" alt="das" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
              voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;

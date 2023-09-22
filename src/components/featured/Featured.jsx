import React from 'react'
import styles from "./featured.module.css";
import Image from "next/image";
export default function Featured() {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <b>Discover, Learn, Grow Your Path to Inspiration!</b> 
        </h1>
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg"  alt="" fill className={styles.img} />
          </div>
          <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Captivating Vistas: A Glimpse into Nature's Breathtaking Beauty</h1>
          <p className={styles.postDesc}>
          Embark on a visual journey to behold the captivating beauty of our scenic view.
          In this blog post, we unveil the secrets and stories that make this vista truly special.
          Immerse yourself in the breathtaking landscapes and let nature's wonders unfold before your eyes.
          </p>
          <button className={styles.postBtn}>Read More</button>
          </div>
        </div>
    </div>
  )
}



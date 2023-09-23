import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>Next Blog</h1>
        </div>
        <div className={styles.comment}>
          <p>
            <strong>Anonymous User:</strong>
          </p>
          <p>
            I stumbled upon this blog and I must say, it's a hidden gem! The
            insightful articles here have broadened my horizons and inspired me
            in countless ways. Keep up the great work!
          </p>
          <p>
            <em>Posted on: July 22, 2023</em>
          </p>
        </div>

        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="facebook" width={18} height={18} />
          <Image src="/tiktok.png" alt="facebook" width={18} height={18} />
          <Image src="/youtube.png" alt="facebook" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Tiktok</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react'
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from 'next/link';
import ThemeToogle from '../themeToogle/ThemeToogle';
import AuthLinks from '../authLinks/AuthLinks';
export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            <Image src="/instagram.png" alt="instagram" width={24} height={24} />
            <Image src="/tiktok.png" alt="youtube" width={24} height={24} />
        </div>
        <div className={styles.logo}>
            Next Blog
        </div>
        <div className={styles.links}>
            <ThemeToogle />
            <Link className={styles.link} href="/">Homepage</Link>
            <Link className={styles.link}href="/">Contact</Link>
            <Link className={styles.link}href="/">About</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

"use client"

import React from 'react'
import styles from "./authLinks.module.css";
import Link from 'next/link';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
function AuthLinks() {

  const status = "authenticated"
  const [open, setOpen] = useState(false);
  return (
    <>
    {
      status === "unauthenticated" ? (
        <Link className={styles.link} href="/login">Login</Link> 
      ) : (
        <>
        <Link  className={styles.link}  href="/write">Write</Link>
        <span onClick={signOut} className={styles.link}>
          Logout</span>
        </> 
      )}
    <div className={styles.burger} onClick={() =>{
      setOpen(!open);
    }}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {
      status === "notaunticated" ? (
        <Link href="/login">Login</Link> 
      ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>
          Logout</span>
        </> 
      )}
      </div>
    )}
    </>
  )
}

export default AuthLinks
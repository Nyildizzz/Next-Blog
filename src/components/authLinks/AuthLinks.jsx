"use client"

import React from 'react'
import styles from "./authLinks.module.css";
import Link from 'next/link';
import { useState } from 'react';
function AuthLinks() {

  const status = "notaunticated"
  const [open, setOpen] = useState(false);
  return (
    <>
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
    <div className={styles.burger}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    </>
  )
}

export default AuthLinks
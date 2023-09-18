"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import styles from "./pagination.module.css";
export default function Pagination({page,hasPrev,hasNext}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <button disabled={!hasPrev} onClick={()=>router.push(`?page=${page -1}`)} className={styles.button}>Previous</button>
        <button disabled={!hasNext} onClick={()=>router.push(`?page=${page +1}`)} className={styles.button}>Next</button>
        
    </div>
  )
}

import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
function blogPost({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;
  return (
    <div className={styles.container}>
        <div className={`${styles[cat]} ${styles.catContainer}`}>
        <h1 className={styles.title}>{cat} Blog</h1>
        </div>
        <div className={styles.content}>
            <CardList page={page} cat={cat} />
        </div>
    </div>
  )
}

export default blogPost
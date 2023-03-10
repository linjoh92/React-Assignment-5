'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundCircel}>
        <h1>Not found – 404!</h1>
        <div className={styles.linkBackHome}>
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

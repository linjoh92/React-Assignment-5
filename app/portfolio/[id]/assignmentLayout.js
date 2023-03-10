import React from 'react'
import Image from 'next/image'
import styles from '../portfolio.module.css'

export default function AssignmentLayout(props) {
  const { number, description, githubLink, vercelLink } = props

  return (
    <div className={styles.assignmentContainer}>
      <div className={styles.asgmtInfoContainer}>
        <h1>Assignment {number} </h1>
      </div>
      <section className={styles.asgmtInfoAndImg}>
        <div className={styles.asgmtImgContainer}>
          <Image
            src={`/image/assignment-${number}.png`}
            alt={`Assignment ${number}`}
            priority
            width={400}
            height={100}
            layout="responsive"
          />
        </div>
        <p>{description}</p>
      </section>
      <div className={styles.linkContainer}>
        <a href={githubLink}>GitHub Repository</a>
        {vercelLink != '' && <a href={vercelLink}>Vercel Page</a>}
      </div>
    </div>
  )
}

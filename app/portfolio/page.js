import styles from './portfolio.module.css'
import AsgmtLink from './asgmtLink'
import Link from 'next/link'

export default function Portfolio() {
  const asgmt = [
    {
      number: '1',
      date: '23.02.06',
    },
    {
      number: '2',
      date: '23.02.13',
    },
    {
      number: '3',
      date: '23.02.21',
    },
    {
      number: '4',
      date: '23.02.26',
    },
  ]

  return (
    <div className={styles.portfolioContainer}>
      <h1>Portfolio</h1>
      <div className={styles.portfolioText}>
        <p>
          In the course JavaScript-ramverk, I have been assigned five
          assignments to complete. Here are the links to four of the assignments
          and the fifth you are looking at right now, my portfolio built in
          React, Next.js,{' '}
          <Link href="https://github.com/linjoh92/React-Assignment-5">
            GitHub Repository
          </Link>
        </p>
        <p>
          As a student of the Frontend / App Developer at Changemaker Education,
          these assignments will play a vital role in building my skills and
          confidence in JavaScript development. I am grateful for the
          opportunity to learn and grow through these assignments and appreciate
          the support provided by my teachers.
        </p>
      </div>
      <div className={styles.seeNowContainer}>
        <div className={styles.linksAsgmt}>
          {asgmt.map((asgmt) => (
            <AsgmtLink key={asgmt.number} {...asgmt} />
          ))}
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import styles from './portfolio.module.css'
import { FiArrowUpRight } from 'react-icons/fi'

export default function AsgmtLink({ number, date }) {
  return (
    <>
      <div className={styles.linkAsgmtContainer}>
        <h3>ASGMT {number}</h3>
        <p className={styles.asgmtDate}>{date}</p>
        <Link className={styles.linkAsgmt} href={`/portfolio/${number}`}>
          See Now <FiArrowUpRight />
        </Link>
      </div>
      {number != 4 && <div className={styles.line}></div>}
    </>
  )
}

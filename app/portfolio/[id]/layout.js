import Link from 'next/link'
import styles from './asgmt.layout.module.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Layout({ children, params }) {
  const activeNumber = parseInt(params.id, 10)
  const prevNumber = activeNumber > 1 ? activeNumber - 1 : 4
  const nextNumber = activeNumber < 4 ? activeNumber + 1 : 1

  return (
    <>
      {children}
      <div className={styles.paginationContainer}>
        <Link
          className={styles.paginationBack}
          href={`/portfolio/${prevNumber}`}
        >
          <MdKeyboardArrowLeft className={styles.navigation} />
        </Link>

        {[1, 2, 3, 4].map((num) => (
          <Link
            href={`/portfolio/${num}`}
            key={num}
            className={
              num === activeNumber ? styles.activAsgmt : styles.numAsgmt
            }
          >
            {num}
          </Link>
        ))}

        <Link href={`/portfolio/${nextNumber}`}>
          <MdKeyboardArrowRight className={styles.navigation} />
        </Link>
      </div>
    </>
  )
}

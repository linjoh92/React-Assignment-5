import Image from 'next/image'
import styles from './about.module.css'
import Link from 'next/link'
import Linn from '../../public/image/founder_linn.jpeg'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>
      <div className={styles.aboutTextAndImage}>
        <div className={styles.aboutText}>
          <p>
            I’ve been freelancing as a creative consultant for the last five
            years. I have mostly done Art Director jobs and worked with
            graphic/product design and social media.
          </p>
          <p>
            Programming is a new chapter for me and I love it! For the first
            time in my working career, I´m satisfied. So far I have learned
            HTML, CSS, javascript Vanilla, and Jquery. I have also learned the
            basics of UX/UI - design. The styling part, CSS, comes naturally to
            me and I think it´s really funny, I believe my background as a
            graphic designer is a great asset to me. With that said I love all
            parts, solving problems and finding effective ways to do things is a
            trigger for me, I can´t stop when I start and I´m eager to learn
            more. I am very excited to learn React!
          </p>
        </div>
        <div className={styles.aboutImg}>
          <Image
            src={Linn}
            alt="Linn Johansson"
            maxWidth={500}
            maxHeight={500}
            layout="responsive"
          />
        </div>
      </div>

      <div className={styles.aboutLink}>
        <Link href="/design">Go to design portfolio</Link>
      </div>
    </div>
  )
}

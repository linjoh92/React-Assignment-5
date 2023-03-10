import './globals.css'
import { Raleway } from 'next/font/google'
import Footer from './footer'
import Header from './header'
import styles from './page.module.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio Linn Johansson',
}

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '900'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

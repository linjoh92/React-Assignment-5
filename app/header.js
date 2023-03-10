import Link from 'next/link'
import './globals.css'
import LogoMotion from './logoMotion'

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <Link href="/">
          <LogoMotion />
        </Link>
        <div className="linksHeader">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header

'use client'
import Link from 'next/link'
import './globals.css'
import LogoMotion from './logoMotion'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const pages = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio'},
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header>
      <div className="headerContainer">
        <Link href="/">
          <LogoMotion />
        </Link>
        <div className="linksHeader">
          {pages.map(({path, name}) => (
            <Link key={name} href={path} className={pathname === path ? 'activ' : ''}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from 'next/image'
import './globals.css'
import Link from 'next/link'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  const socialMedia = [
    {
      link: 'https://www.linkedin.com/in/linn-johansson-50724167/',
      icon: <AiOutlineLinkedin />,
    },
    {
      link: 'https://www.facebook.com/Linnj92/',
      icon: <AiOutlineFacebook />,
    },
    {
      link: 'https://www.instagram.com/linjoh/',
      icon: <AiOutlineInstagram />,
    },
  ]

  return (
    <footer>
      <Link href="/">
        <Image
          src="/image/loggaThinLine.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <h2>Follow me on social media</h2>
      <div className="socialMediaContainer">
        {socialMedia.map(({ link, icon }) => (
          <a key={link} href={link} style={{ fontSize: '1.5rem' }}>
            {icon}
          </a>
        ))}
      </div>
      <div>© 2023 Linn Johansson</div>
    </footer>
  )
}

export default Footer

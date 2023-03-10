'use client'
import Image from 'next/image'
import logo from '../public/image/logga.svg'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './globals.css'

function LogoMotion() {
  const [clickCount, setClickCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const handleDoubleClick = () => {
    setClickCount(clickCount + 1)
    if (clickCount === 1) {
      setIsClicked(true)
    }
  }

  return (
    <>
      <motion.div
        onDoubleClick={handleDoubleClick}
        whileTap={{
          rotate: [0, -10, 10, -10, 10, -10, 10, 0],
          transition: { duration: 0.5 },
        }}
        animate={{
          rotate: isClicked ? [0, -10, 10, -10, 10, -10, 10, 0] : 0,
          x: isClicked ? '110vh' : '0',
          y: isClicked ? '100vh' : '0',
          transition: { duration: 1.5 },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image className="logo" src={logo} alt="Logga" width={50} height={50} />
      </motion.div>
    </>
  )
}

export default LogoMotion

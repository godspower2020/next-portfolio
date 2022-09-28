import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const [active, setActive] = useState('nav__menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__Navbar app__flex__justify-content-space-between">

      <div className="app__Navbar-logo app__flex__justify-content-flex-start">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width="90" height="20" />
        </Link>
      </div>
      
      <div className="app__Navbar-menu app__flex">

        <div className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
 
        <motion.div
        className="menu app__flex__justify-align-flex-end"
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <ul className="app__flex__justify-align-flex-start">
            <Link href="/">Home</Link>
            <Link href="/portfolio">My Portfolio</Link>
            <Link href="/resume">My Resume</Link>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
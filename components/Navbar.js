import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'
import { motion } from 'framer-motion';

const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  { 
    name: "My Portfolio",
    path: "/portfolio", 
  },
  {
    name: "My Resume",
    path: "/resume",
  },
];

const Navbar = () => {
  const router = useRouter();

  const [active, setActive] = useState('app__Navbar-menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'app__Navbar-menu' ? setActive('app__Navbar-menu nav__active') : setActive('app__Navbar-menu') 

    // ToggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

  return (
    <nav className="app__Navbar app__flex__justify-content-space-between">

      <div className="app__Navbar-logo app__flex__justify-content-flex-start">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width="90" height="20" />
        </Link>
      </div>
      
      <div className={`${active} app__flex`}> 
        <ul className='app__flex__justify-align-flex-start'>
        {navLinks.map((item, index) => (
          <Link className='menu_link' key={index} href={item.path}>{item.name}</Link>
        ))}
        </ul> 
      </div>
      
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar

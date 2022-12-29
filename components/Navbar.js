import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import { motion } from 'framer-motion';

const navLinks = [
  { 
    name: 'Home', 
    path: '/',
    target: ''
  },
  { 
    name: 'My Portfolio',
    path: '/portfolio',
    target: ''
  },
  {
    name: 'My Resume',
    path: '/resume',
    target: '_blank'
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState('app__Navbar')
  const [active, setActive] = useState('app__Navbar-menu')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  // const [isOpen, setIsOpen] = useState(false),

  const router = useRouter()
  
  useEffect(() => {
    router.pathname == '/' ? setNavbar('app__Navbar app__Navbar-fixed') : setNavbar('app__Navbar')
  }, []);

  const navToggle = () => {
    // show & unshow the nav menu
    active === 'app__Navbar-menu' ? setActive('app__Navbar-menu nav__active') : setActive('app__Navbar-menu') 

    // ToggleIcon
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

  return (
    <nav className={`${navbar} app__flex__justify-content-space-between`}>

      <div className="app__Navbar-logo app__flex__justify-content-flex-start">
        <Link href='/'>
          <h1><span className='blue'>A</span></h1>
        </Link>
      </div>
      
      <div className={`${active} app__flex`}> 
        <ul className='app__flex__justify-align-flex-start'>
        {navLinks.map((item, index) => (
          <p className={`${router.pathname == item.path ? 'menu_link-hide' : ''} menu_link`}>
            <a target={item.target} key={index} href={item.path}>{item.name}</a>
          </p>
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
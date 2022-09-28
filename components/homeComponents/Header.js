import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='header' className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info app__flex__justify-align-flex-start"
      >
        <div className="app__header-badge app__flex__justify-align-flex-end">
          <div className="badge-cmp app__flex">
            <span className="emoji">
              <img src="wave.png" alt="wave" />
            </span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am</p>
              <h1 className="bold-text">Godspower</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">slick Coder</p>
          </div>
        </div>
      </motion.div>
      <motion.div
      whileInView={{opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildern: 0.5 }}
      className="app__header-img app__flex__justify-align-flex-end"
      >
        <img src="profile.png" alt="profile_bg" />
        <motion.img
         whileInView={{scale: [0, 1] }}
         transition={{ duration: 1, ease: 'easeInOut' }}
         src="circle.svg"
         alt="profile_circle"
         className="overlay_circle"
         />
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {["flutter.png", "redux.png", "sass.png"].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header);
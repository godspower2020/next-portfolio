import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { motion } from 'framer-motion';

import{ urlFor } from '../../lib/sanityClient';

const PortfolioCard = ({portfolio: {heroImg, name, projectLink, codeLink, slug, title, description, tags}, index}) => {
  return (
    <div>
        <Link href={`/portfolio/${slug.current}`}>
            <motion.div 
                whileInView={{ opacity: 1 }}
                whileHover={{ scale:1.08 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__work-item app__flex'
                key={index}
            >
                <div className='app__work-img app__flex'>
                <img 
                    src={urlFor(heroImg)}
                    alt={name}
                />
                <motion.div
                    whileHover={{opacity: [0, 1]}}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__work-hover app__flex'
                >
                    <a href={projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                        whileInView={{scale: [0, 1]}}
                        whileHover={{scale: [1, 0.9]}}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                    >
                        <BsGlobe />
                    </motion.div>
                    </a>
                    <a href={codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                        whileInView={{scale: [0, 1]}}
                        whileHover={{scale: [1, 0.9]}}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                    >
                        <AiFillGithub />
                    </motion.div>
                    </a>
                </motion.div>
                </div>

                <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{title}</h4>
                <p className='p-text' style={{ marginTop: 10}}>{description.substring(0, 80) + "...  see more"}</p>
                <div className='app__work-tag app__flex'>
                    <p className='p-text'>{tags[0]}</p>
                </div>
                </div>
            </motion.div>
        </Link>
    </div>
  )
}

export default PortfolioCard
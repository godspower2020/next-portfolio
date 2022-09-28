import React from 'react'
import { motion } from 'framer-motion';

import{ urlFor } from '../../lib/sanityClient';

const About = ({ about: {imgUrl, title, description} }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale:1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__profile-item app__flex__justify-align-flex-start"
    >
      <img src={urlFor(imgUrl)} alt={title} />
      <h2 className="bold-text" style={{ marginTop: 20}}>{title}</h2>
      <h2 className="p-text" style={{ marginTop: 10}}>{description}</h2>
    </motion.div>
  )
}

export default About
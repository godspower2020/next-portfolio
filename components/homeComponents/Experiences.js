import React from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

const Experiences = ({experience}) => {
  return (
    <motion.div className='app__skills-exp-item'
        key={experience.year}
        >
        <div className='app__skills-exp-year'> 
            <p className='bold-text'>{experience.year}</p>
        </div>
        <motion.div className='app__skills-exp-works'>
            {experience.works.map((work) => (
              <>
                <motion.div
                  whileInView={{opacity: [0, 1]}}
                  transition={{duration: 0.5}}
                  className='app__skills-exp-work'
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.company}</p>
                </motion.div>
                <ReactTooltip
                  id={work.name}
                  effect='solid'
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                  {work.desc}
                </ReactTooltip>
              </>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Experiences
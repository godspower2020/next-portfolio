import React, { useState } from 'react'
import {Link} from 'react-scroll'

const navDots = [
  { 
    name: 'Hero',
  },
  {
    name: 'Spotlights',
  },
  {
    name: 'Experiences',
  },
  {
    name: 'Testimonial',
  },
  { 
    name: 'Contact',
  },
];

const NavigationDots = () => {
  const [active, setActive] = useState('app__navigation-dot')

  const animateActiveDot = () => {
    active === 'app__navigation-dot' ? setActive('app__navigation-dot active-dot') : setActive('app__navigation-dot')
  }

  return (
    <div className='app__navigation'>
        {navDots.map((item, index) => (
          <div className='flex-dots'>
            <span>{item.name}</span>
            <Link
              onClick={animateActiveDot}
              to={item.name}
              spy={true} 
              smooth={true} 
              offset={-1} 
              duration={0} 
              key={item + index}
              className={`${active}`}
            />
          </div>
        ))}
    </div>
  )
}

export default NavigationDots
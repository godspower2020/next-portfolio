import React from 'react'

const Experiences = ({experience}) => {
  return (
    <li 
      className='company'
      key={experience.year}
    >
      {experience.works.map((work) => (
        <>
          <header>
            <h3 style={{color: work.color}}>{work.company} <span className='inherent-color'>{work.name}</span></h3>
            <span className='stop'>{experience.year}</span>
          </header> 
          <p className='points'>{work.desc}</p>
          <ul 
            className='points'
            key={work.company}
            // key={work.id}
          >
            {/* 
              <li className='huge-dots'>{(work.points.length && work.points)}</li> */}
          </ul>
        </>
      ))}
    </li>
  )
}

export default Experiences
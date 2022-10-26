import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {motion} from 'framer-motion'

import{ client } from '../lib/sanityClient';
import { Hero, About, Skills, Experiences, Testimonials } from '../components/homeComponents'
import { Navbar, Contact, NavigationDots, SocialMedia } from '../components'

const Home = ( {idName, classNames, heroItems, abouts, skills, experience, testimonials} ) => {
  
  const hero = [
      'Frontend Developer', 
      'UI/UX Engineer', 
      'Designer'
  ];

  const [title, setTitle] = useState(hero[0])

  useEffect(() => {
    const scrollText = (hero) => {
      console.log(hero)
      // for(let i = 0; i < hero.length; i++){
      //   setTimeout(() => {
      //     setTitle(hero[i])
      //   }, 1000)
      // }
  }
  scrollText(hero)
  }, [])
  

  return (
    <div id='home' className='home'>
      <Head>
        <title>Augustine Godspower | Frontend Developer, fullstack Developer & UI/UX expert</title>
      </Head>
      <div className={`app ${classNames}`}>
        <Navbar />
        <SocialMedia />
        <NavigationDots active={idName} />
        <div id="Hero" className='app__container'>
          <div className='app__wrapper app__flex'>
            <div className="app__header app__flex">
              <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info app__flex"
              >
                <div className="app__header-badge app__flex__justify-align-flex-start">
                  <div className="div-margin hero__animated-text">
                    <p className="p-text line">{title}</p>
                  </div>
                  <div className="div-margin hero__text-div">
                    <div className='no-wrap'>Talk about:</div> 
                    <span>
                      <p>{heroItems?.map((heroItem) => <Hero key={heroItems._id} heroItem={heroItem} /> )}</p>
                    </span>
                  </div>
                  <div className="div-margin hero__static-text">
                    <p>i enjoy providing great unique solutions to businesses and brands, while creating the next generation apps, pushing beyond boundaries</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
              whileInView={{opacity: [0, 1] }}
              transition={{ duration: 0.8, delayChildern: 0.8 }}
              className="app__header-img app__flex__justify-align-flex-end"
              >
                <img src="profile.png" alt="profile_bg" />
              </motion.div>
            </div>
          </div>
        </div>
        <div  id="Spotlights" className='about app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9, delayChildren: 0.5}}
              className={`${classNames} app__flex`}
            >
              <div>
                <div className="about__spotlight-home app__flex__justify-content-space-between">
                  {/* <p className="spotlight p-text">spltlight</p> */}
                  <h2 className="head-text">Spotlight</h2>
                  {/* <div className="spotlight__container">
                    <p className="spotlight-text">
                      finding solutions to problems facing mankind through technological advancement and helping millions build whats next for their business.  
                    </p>
                    <p className="spotlight-text">
                      I craft beautiful and functional User Interfaces working with tools such as Figma, Adobe Illustrator and Adobe Photoshop.
                      Armed with reactjs, nextjs, Nodejs, ExpressJs, EJS and MongoDB, I build Frontend, Server side applications & Backend services
                    </p>
                  </div> */}
                </div>

                <div className="app__profiles app__flex__align-items-flex-start">
                  {abouts?.map((about) => <About key={about._id} about={about} /> )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div id='Experiences' className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
              <div>
                <h2 className='head-text'>Skills & Experience</h2>
                <div className='app__skills-container'>
                  <motion.div className='app__skills-list'>
                    {skills?.map((skill) => <Skills key={skill._id} skill={skill} /> )}
                  </motion.div>
                  <motion.div className='app__skills-exp'>
                    {experience?.map((experience) => <Experiences key={experience.startYear} experience={experience} /> )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div id='Testimonial' className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
              <div>
                <h2 className="head-text">My Clients</h2>
                {testimonials.length && ( <Testimonials key={testimonials._id} testimonials={testimonials} /> )}
              </div>
            </motion.div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "heroItems"]';
  const heroItems = await client.fetch(query);

  const aboutQuery = '*[_type == "abouts"]';
  const abouts = await client.fetch(aboutQuery);

  const skillsQuery = '*[_type == "skills"]';
  const skills = await client.fetch(skillsQuery);

  const experiencesQuery = '*[_type == "experiences"]';
  const experience = await client.fetch(experiencesQuery);

  const testimonialsQuery = '*[_type == "testimonials"]';
  const testimonials = await client.fetch(testimonialsQuery);

  return {
    props: { heroItems, abouts, skills, experience, testimonials }
  }
}

export default Home
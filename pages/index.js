import React from 'react'
import Head from 'next/head'
import {motion} from 'framer-motion'


import{ client } from '../lib/sanityClient';
import { Header, About, Skills, Experiences, Testimonials } from '../components/homeComponents'
import { Navbar } from '../components' 
// import { Contact } from '../components' 
// import { Footer } from '../components' 
import {NavigationDots, SocialMedia} from '../components'

const Home = ( {idName, classNames, abouts, skills, experience, testimonials} ) => {
  return (
    <>
      <Head>
        <title>Home - welcome</title>
      </Head>
      <div id={idName} className={`app ${classNames}`}>
        <Navbar />
        <SocialMedia />
        <NavigationDots active={idName} />
        <Header />
        <div className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
              <div id="about">
                <h2 className="head-text">
                  I know that <span>good Apps</span>
                  <br />
                  means <span>Good Business</span>
                </h2>

                <div className="app__profiles app__flex__align-items-flex-start">
                  {abouts?.map((about) => <About key={about._id} about={about} /> )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
              <div id='skills'>
                <h2 className='head-text'>Skills & Experience</h2>
                <div className='app__skills-container'>
                  <motion.div className='app__skills-list'>
                    {skills?.map((skill) => <Skills key={skill._id} skill={skill} /> )}
                  </motion.div>
                  <motion.div className='app__skills-exp'>
                    {experience?.map((experience) => <Experiences key={experience._id} experience={experience} /> )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='app__container'>
          <div className='app__wrapper app__flex'>
            <motion.div
              whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
              transition={{duration: 0.9}}
              className={`${classNames} app__flex`}
            >
                <div id='testimonial'>
                {testimonials.length && ( <Testimonials key={testimonials._id} testimonials={testimonials} /> )}
              </div>
            </motion.div>
          </div>
        </div>
        {/* <Contact />
        <Footer />   */}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "abouts"]';
  const abouts = await client.fetch(query);

  const skillsQuery = '*[_type == "skills"]';
  const skills = await client.fetch(skillsQuery);

  const experiencesQuery = '*[_type == "experiences"]';
  const experience = await client.fetch(experiencesQuery);

  const testimonialsQuery = '*[_type == "testimonials"]';
  const testimonials = await client.fetch(testimonialsQuery);

  return {
    props: { abouts, skills, experience, testimonials }
  }
}

export default Home
import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';

import{ client } from '../lib/sanityClient';
import { Navbar, SocialMedia } from '../components'
import { PortfolioCard } from '../components/portfolioComponents';

const Portfolio = ({portfolios, filterPortfolio}) => {
    // const [filterPortfolio, setFilterPortfolio] = useState([])
    const [activeFilter, setActiveFilter] = useState('UI/UX');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

    const handlePortfolioFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{y: 100, opacity: 0}])

        setTimeout(() => {
        setAnimateCard([{y: 0, opacity: 1}])

        if(item === 'UI/UX') {
            setFilterPortfolio(portfolios)
        } else {
            setFilterPortfolio(portfolios.filter((portfolio) => portfolio.tags.includes(item)))
        }
        }, 500);
    }

  return (
    <div id='portfolio'>
      <Head>
        <title>My Portfolio - works</title>
      </Head>
      <div className='app'>
        <Navbar />
        <SocialMedia />
          <h5 className='head-text remove-top-margin'>/PORTFOLIO.</h5>
          <h6 className="head-text reduce-h6-top-margin">
          selected <span>projects</span> I've worked on in the past.
          </h6>

          <div className="app__work-filter">
            {['UI/UX', 'Web App', 'Mobile App', 'React Js', 'e-commerce', 'WordPress', 'All'].map((item, index) => (
              <div
                key={index}
                onClick={() => handlePortfolioFilter(item)}
                className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className='app__work-portfolio'
          >
            {filterPortfolio.map((portfolio, index) => <PortfolioCard key={portfolio._id} portfolio={portfolio} index={index} /> )}
          </motion.div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "portfolios"]';
    const portfolios = await client.fetch(query);
    const filterPortfolio = await client.fetch(query);
  
    return {
      props: { portfolios, filterPortfolio }
    } 
  }

export default Portfolio
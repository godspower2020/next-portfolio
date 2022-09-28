import React, {useState} from 'react'
import Head from 'next/head'

import{ client, urlFor } from '../../lib/sanityClient';
import { Navbar } from '../../components'

const PortfolioDetails = ({ portfolio: {description, title, imgUrl}}) => {
  const [index, setIndex] = useState(1)

  return (
    <>
      <Head>
        <title>My Portfolio - works</title>
      </Head>
      <Navbar />
      <div>
          <div className='portfolio-detail-container'>
            <h2>{title}</h2>
            <div>
              <div className="portfolio-detail-image">
                <img src={urlFor(imgUrl && imgUrl[index])} />
              </div>
              <div className="small-images-container">
                {imgUrl?.map((item, i) => (
                  <img 
                    src={urlFor(item)}
                    className={i === index ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  ) 
}

export const getStaticPaths = async () => {
  const query = `*[_type == "portfolios"] {
    slug {
      current
    }
  }`;
  const portfolios = await client.fetch(query);

  const paths = portfolios.map((portfolio) => ({
    params: {
      slug: portfolio.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: {slug} }) => {
  const query = `*[_type == "portfolios" && slug.current == '${slug}'][0]`;
  const portfolio = await client.fetch(query);

  return {
    props: { portfolio }
  }
}

export default PortfolioDetails
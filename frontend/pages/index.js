import Head from 'next/head'
import BundleOffer from "../components/BundleOffer"
import InfoContainer from "../components/InfoContainer"
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Banner from '../components/Banner'
import {sanityClient} from '../lib/sanity.server'
import Faq from '../components/Faq'

const Home = ({ product, banner }) => {
  return (
    <div className='mt-20'>
      <Head>
        <title>Wholesale</title>
        <meta name="Home Page." content="ECommerce site created with NextJS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
    <Hero />
    <Featured />
    <InfoContainer />
    
    <BundleOffer />
    <Banner footerBanner={banner && banner[0]} product={product} />    
    </main>

    </div>
  )
}


export const getServerSideProps = async () => { 
  const bannerQuery = '*[_type == "banner"]'
  const banner = await sanityClient.fetch(bannerQuery)
  const productQuery = '*[_type == "banner"]'
  const product = await sanityClient.fetch(productQuery)

  return {
    props: { product, banner }
  }
}

export default Home;
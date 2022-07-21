import Head from 'next/head'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import {sanityClient} from '../lib/sanity.server'

const Home = ({ product, banner }) => {
  return (
    <div className='mt-16'>
      <Head>
        <title>Wholesale</title>
        <meta name="Home Page." content="ECommerce site created with NextJS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <main>
    <Hero />
    <Featured />
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
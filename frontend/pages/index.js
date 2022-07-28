import Head from 'next/head'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import {sanityClient} from '../lib/sanity.server'

const Home = ({ products }) => {
  return (
    <div className='mt-16'>
      <Head>
        <title>Samosa House</title>
        <meta name="Home Page." content="ECommerce site created with NextJS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <main>
    <Hero />
    <Menu products={products} />
    <Featured />
    </main>

    </div>
  )
}


//sanity
export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]'
  const products = await sanityClient.fetch(query)

  return {
    props: {products}
  }
}

export default Home;
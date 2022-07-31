import Head from 'next/head'
import Hero from '../components/Hero'
import Hours from '../components/Hours'
import Menu from '../components/Menu'
import Summary from '../components/Summary'
import {sanityClient} from '../lib/sanity.server'

const Home = ({ products }) => {
  return (
    <div className='mt-16'>
      <Head>
        <title>Samosa House</title>
        <meta name="Home Page." content="ECommerce site created with NextJS." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>


    <main>
    <Hero />
    <Summary />
    <Menu products={products} />
    <Hours />
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
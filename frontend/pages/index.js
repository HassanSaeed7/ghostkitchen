import Head from 'next/head'
import BundleOffer from "../components/BundleOffer"
import InfoContainer from "../components/InfoContainer"
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
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
    <Card />



      </main>

    </div>
  )
}

export default Home;
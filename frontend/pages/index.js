import Head from 'next/head'
import Image from 'next/image'
import HeroImg from "../public/cbd0.jpg"
import InfoContainer from "../components/InfoContainer"
import Featured from '../components/Featured'
import Hero from '../components/Hero'


export default function Home() {
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


      <div className="flex items-center justify-center">
        <p>CTA</p>
                  <a
                    href="/about"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
      </div>

      </main>

    </div>
  )
}

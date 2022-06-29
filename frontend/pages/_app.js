import { StateContext } from "../context/StateContext"
import { Toaster } from 'react-hot-toast';
import Nav from "../components/Nav"
import Cart from "../components/Cart"
import Footer from "../components/Footer"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {



  return (
    <>
    <StateContext>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Nav />
    <Cart />
      <Component {...pageProps} />
    <Footer />
    </StateContext>
    </>

  )
}

export default MyApp

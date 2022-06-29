import { StateContext } from "../context/StateContext"
import Cart from "../components/Cart"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {



  return (
    <>
    <StateContext>
    <Nav />
    <Cart />
      <Component {...pageProps} />
    <Footer />
    </StateContext>
    </>

  )
}

export default MyApp

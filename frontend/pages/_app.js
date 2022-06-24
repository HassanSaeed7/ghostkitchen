import Cart from "../components/Cart"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {



  return (
    <>
    <Nav 
    
    />
    {/* <Cart /> */}
    <Component {...pageProps} />
    <Footer />
    </>

  )
}

export default MyApp

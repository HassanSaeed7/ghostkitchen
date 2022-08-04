import { useState, useEffect } from "react";
import { StateContext } from "../context/StateContext"
import { Toaster } from 'react-hot-toast';
import Nav from "../components/Nav"
import Cart from "../components/Cart"
import Footer from "../components/Footer"
import { AnimatePresence, motion } from "framer-motion";
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const [showChild, setShowChild] = useState(false);
  
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {

  return (
    <>
    <StateContext>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Nav />
    <Cart />

    <AnimatePresence exitBeforeEnter>
    <motion.main
    variants={variants} 
    initial="hidden" 
    animate="enter" 
    exit="exit" 
    transition={{ type: 'linear' }}
    key={router.route}>

    <Component {...pageProps} />
    
    </motion.main>
    </AnimatePresence>

    <Footer />
    </StateContext>
    </>

  )
  } 
}

export default MyApp

import React, { useEffect } from 'react'
import Header from './compends/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './compends/Footer.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from './ScrollToTop.jsx';
import Cart_slider from './compends/Context/Cart_slider.jsx';
import { toast } from 'react-toastify';
const App = () => {
  useEffect(() => {
    toast.success('Welcome to our website', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },[])
  return (
    <>

      <div>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
        <Cart_slider />
        <button className='w-50 h-10 bg-white cursor-pointer hover:bg-green-400 rounded-4xl fixed bottom-5 right-5 active:scale-90 '> <FontAwesomeIcon icon={faWhatsapp} /> 👋 Hi, Chat with us. </button>
      </div>
    </>
  )
}

export default App
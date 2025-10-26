import React from 'react'
import Header from './compends/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './compends/Footer.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from './ScrollToTop.jsx';
const App = () => {
  return (
    <>
    
      <div>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
        <button className='w-50 h-10 bg-white cursor-pointer hover:bg-green-400 rounded-4xl fixed bottom-5 right-5 active:scale-90 '> <FontAwesomeIcon icon={faWhatsapp} /> 👋 Hi, Chat with us. </button>
      </div>
    </>
  )
}

export default App
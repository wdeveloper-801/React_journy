import React from 'react'
import Header from './compends/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './compends/Footer.jsx'
const App = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
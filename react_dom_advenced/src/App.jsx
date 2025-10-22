import React from 'react'
import Header from './compends/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './compends/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
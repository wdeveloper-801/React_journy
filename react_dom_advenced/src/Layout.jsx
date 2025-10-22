import React from 'react'
import Header from './compends/Header/Header'
import Footer from './compends/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
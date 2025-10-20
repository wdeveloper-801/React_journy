import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <div className="w-full h-16 bg-cyan-700 flex justify-between items-center px-4 fixed top-0">
                <h2 className="text-2xl font-bold text-white">Navbar</h2>
                <div>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/home2">Home</Link>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/about">About</Link>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Nav

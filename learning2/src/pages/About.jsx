import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  
    return (
        <div className="flex flex-col items-center h-screen">
            <div>
           
            </div>
            <h1 className="text-4xl font-bold underline mt-4 mb-12">About</h1>
            <div>
                <Link className="ml-4 text-1xl font-bold text-blue-700" to="man_Tshirt">MAN_TSHIRT</Link>
                <Link className="ml-4 text-1xl font-bold text-blue-700" to="man_trouzer">MAN_TROUZER</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default About

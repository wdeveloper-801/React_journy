import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className="">
            <h1 className="text-4xl text-center font-bold underline mt-4 mb-12">About</h1>

            {/* ✅ Relative links: no leading slash */}
            <Link className="ml-4 text-1xl font-bold text-blue-700" to="man_Tshirt">MAN_TSHIRT</Link>
            <Link className="ml-4 text-1xl font-bold text-blue-700" to="man_trouzer">MAN_TROUZER</Link>

            {/* ✅ Nested route content will render here */}
            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    )
}

export default About

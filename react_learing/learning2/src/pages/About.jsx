import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

const About = () => {
  useEffect(()=>{
    toast.success('Welcome to the about page!', {
      position: 'top-right',
      autoClose: 10000,})
},[])

    return (
        <div className="flex flex-col items-center ">
            <div>
            </div>  
            <h1 className="text-4xl font-bold underline mt-18 mb-5">About</h1>
            <div>
                <Link className="ml-8 text-4xl font-bold text-blue-500 " to="man_Tshirt">MAN_TSHIRT</Link>
                <Link className="ml-8 text-4xl font-bold text-blue-500 " to="man_trouzer">MAN_TROUZER</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default About

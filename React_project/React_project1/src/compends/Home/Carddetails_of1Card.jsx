import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Card_details_of_1_Card = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
       <div className='w-full h-screen flex justify-center items-center bg-green-300'>
        <div className='w-11/12 h-full bg-blue-400'></div>
        <div className='w-full h-full bg-purple-500'></div>
       </div>
    )
}

export default Card_details_of_1_Card

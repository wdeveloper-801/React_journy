import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Card_details_of_1_Card = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src={state.url} alt={state.name} className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg" />
            <h1 className="text-3xl font-bold mt-4">{state.name}</h1>
            <button onClick={() => navigate('/')} className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"> Back </button>
        </div>
    )
}

export default Card_details_of_1_Card

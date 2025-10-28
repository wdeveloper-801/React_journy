import React from 'react'
import { useLocation } from 'react-router-dom';

const Page8 = () => {
    const { state } = useLocation();
    const img = state?.img;

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <img
                src={img}
                alt="User"
                className="w-64 h-64 rounded-full object-cover border-4 border-white"/>
        </div>
    )
}

export default Page8
import React, { useContext } from 'react'
import { Datashare } from '../Usecontext/Usecontext'

const Home = () => {
    const { up, down, first } = useContext(Datashare)
    return (
        <div className='bg-green-400 flex items-center w-full h-full flex-col'>Home
        <h1 className='text-3xl font-bold text-red-500'>{first}</h1>
            <button onMouseMoveCapture={up} className='w-20 h-10 bg-red-600 mt-5 cursor-pointer active:scale-90'>up</button>
            <button onMouseMoveCapture={down} className='w-20 h-10 bg-purple-500 mb-2 mt-5 cursor-pointer active:scale-90'>down</button>
        </div>
    )
}

export default Home
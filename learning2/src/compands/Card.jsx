import {  Bookmark } from 'lucide-react';
import React from 'react'

const Card = (props) => {
    console.log(props);

    return (<>
        <div className='w-80 h-100 bg-gray-700 rounded-lg   m-8 flex items-center flex-col p-8 border-2 border-amber-50 hover:scale-110 transition duration-500 ease-in-out '>
            <img src={props.img} alt="" className='w-30 h-30  a1 object-cover' />
            <h2 className='mt-4 text-3xl'>Name: {props.name} </h2>
            <p className='mt-2'>Age: {props.age}</p>
            <button className='bg-white p-2  mt-4 mb-4 text-black rounded-lg cursor-pointer active:scale-90 '>View Profile  </button>
            <Bookmark size={16} color="#ffffff" strokeWidth={1} />
        </div>
    </>
    )
}

export default Card
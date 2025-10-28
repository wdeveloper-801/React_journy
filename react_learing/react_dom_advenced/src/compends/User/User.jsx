import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {id} = useParams()
  return (
    <div className='bg-gray-600 h-20 flex justify-center items-center'>
        <h1 className='text-4xl text-white'>User: {id}</h1>
    </div>
  )
}

export default User
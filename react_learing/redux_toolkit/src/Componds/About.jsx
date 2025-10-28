import React from 'react'
import { useSelector } from 'react-redux'
const About = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div className='h-screen flex flex-col items-center'>
      <h1>About</h1>
      <h1 className='mt-5 text-7xl text-pink-600'>{count}</h1>
    </div>
  )
}

export default About
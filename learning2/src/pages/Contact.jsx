import React, { useContext } from 'react'
import { CounterContext } from '../usecontext/usecontext1'

const Contact = () => {
  const counters = useContext(CounterContext)

  if (!counters) {
    return <p className="text-red-500 text-center mt-4">Context not available</p>
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className="text-4xl text-center font-bold underline mt-16">Contact</h1>
      <h1 className='text-3xl mt-2 mb-2'>{counters.first}</h1>
      <h1 className='text-3xl mt-2 mb-2'>{counters.secound}</h1>
      <button onClick={counters.one} className='w-24 h-12 bg-blue-500 text-white rounded-2xl mt-4 cursor-pointer transition-transform duration-150 active:scale-75'>increase</button>
      <button onClick={counters.two} className='w-24 h-12 mb-20 bg-green-500 text-white rounded-2xl mt-4 cursor-pointer transition-transform duration-150 active:scale-75'>increase</button>
      {/* <p style={{ color: Color, fontSize: '18px' }} className='mt-4'>This is green text</p> */}
    </div>
  )
}

export default Contact

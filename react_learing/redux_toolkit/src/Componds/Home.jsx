import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Counter'
const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='h-screen flex  flex-col items-center'>
      <h1 className='mt-5'>   home</h1>
      <h1 className='text-6xl mt-5 text-orange-500'>{count}</h1>
      <button  onClick={() => dispatch(increment())} className=' w-25 rounded-3xl cursor-pointer active:scale-90 h-15 bg-red-600 text-2xl mt-5  ' >up</button>
      <button onClick={() => dispatch(decrement())} className=' w-25 rounded-3xl cursor-pointer active:scale-90 h-15 bg-green-600 text-2xl mt-5 '>down</button>
    </div>
  )
}

export default Home
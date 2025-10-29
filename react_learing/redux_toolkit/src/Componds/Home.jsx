import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, upper, multiply, colorchange, changetheme, } from '../Redux/Counter'
const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const color = useSelector((state) => state.counter.color)
  const theme = useSelector((state) => state.counter.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  // Read from localStorage (default to 0 if not set)
  const storedCount = localStorage.getItem('count')
  return (
    <div className={`h-screen flex  flex-col items-center `}
  style={{ backgroundColor: theme === 'black' ? 'black' : 'green' }}>
      <h1 className='mt-5'>   home</h1>
      <h1 className='text-6xl mt-5 text-orange-500'>{storedCount}</h1>
      <button onClick={() => dispatch(increment())} className=' w-25 rounded-3xl cursor-pointer active:scale-90 h-15 bg-red-600 text-2xl mt-5  ' >up</button>
      <button onClick={() => dispatch(decrement())} className=' w-25 rounded-3xl cursor-pointer active:scale-90 h-15 bg-green-600 text-2xl mt-5 '>down</button>
      <button onClick={() => dispatch(upper())} className=' w-30 rounded-3xl cursor-pointer active:scale-90 h-15 bg-purple-500 text-2xl mt-5 active:bg-blue-500'>plus by 5</button>
      <button onClick={() => dispatch(multiply())} className=' w-40 rounded-3xl cursor-pointer active:scale-90 h-15 bg-yellow-500 text-2xl mt-5 active:bg-blue-500'>multiply by 2</button>
      <div className='w-40 h-20 mt-5 rounded-lg' style={{ backgroundColor: color }}   ></div>
      <button onClick={() => dispatch(colorchange())} className=' w-40 rounded-3xl cursor-pointer active:scale-90 h-15 bg-yellow-500 text-2xl mt-5 active:bg-blue-500'>multiply by 2</button>
      <button onClick={() => dispatch(changetheme())} className=' w-40 rounded-3xl cursor-pointer active:scale-90 h-15 bg-yellow-500 text-2xl mt-5 active:bg-blue-500'>change theme</button>
    </div>
  )
}

export default Home
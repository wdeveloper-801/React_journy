import React from 'react'
import zustand_st1 from './zustand Store/zustand1'

const Page1 = () => {
    const { count, increment, decrement, reset, incrementby2 } = zustand_st1()
    
     localStorage.setItem('count',count)

    return (
        <div className='h-screen bg-red-700 flex items-center flex-col'>
            <h1 className='text-6xl mt-5'>{count}</h1>
            <button onClick={increment} className='w-24 h-10 cursor-pointer active:scale-90 bg-green-500 active:bg-blue-500 mt-10'>up</button>
            <button onClick={decrement} className='w-24 h-10 cursor-pointer active:scale-90 bg-green-500 active:bg-blue-500 mt-10'>down</button>
            <button onClick={incrementby2} className='w-24 h-10 cursor-pointer active:scale-90 bg-green-500 active:bg-blue-500 mt-10'>multiplay by 2</button>
            <button onClick={reset} className='w-24 h-10 cursor-pointer active:scale-90 bg-green-500 active:bg-blue-500 mt-10'>reset</button>
        </div>
    )
}

export default Page1
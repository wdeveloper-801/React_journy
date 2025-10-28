import React from 'react'
import Higher_Order_Components_file1 from './Higher Order Components file1'
const Example1_HOC = ({ increment, count, decrement }) => {
    return (
        <>
            <div className='flex justify-center items-center flex-col gap-4'>
                <div className='flex justify-center items-center flex-col gap-4 bg-green-500 w-3xs pb-10 rounded-2xl '>
                    <h1>click</h1>
                    <h1 className='text-5xl'>{count}</h1>
                    <button onClick={increment} className='w-22 h-12 bg-blue-400 cursor-pointer active:scale-90'>up</button>
                    <button onClick={decrement} className='w-22 h-12 bg-orange-400 cursor-pointer active:scale-90'>dowm</button>
                </div>
               
            </div>
        </>
    )
}

export default Higher_Order_Components_file1(Example1_HOC)
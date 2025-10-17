import React, { useState } from 'react'

const Counter = () => {
    const [first, setfirst] = useState(0)
    const [Name, setName] = useState(["imran ", 10])
    let value_up = () => {
        setfirst((a) => a + 1)
        setfirst((a) => a + 1)
        setfirst((a) => a + 1)
    }

    let namechanger = () => {
        setName(["zumair ", 20])
    }
   
    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='mt-4 text-6xl'>{first}</h1>
                <button onClick={value_up} className='size-fit bg-blue-500 text-white p-2 rounded-lg w-32 mt-3 cursor-pointer active:scale-90 border-none ouyline-none'>click</button>
                <h1 className='mt-4 text-6xl mb-4'>{Name}</h1>
                <button onClick={namechanger} className='size-fit bg-green-500 text-white p-2 rounded-lg w-32 mt-3 cursor-pointer  border-none ouyline-none mb-8 active:scale-90 active:bg-green-600 hover:bg-green-700 '>click</button>
            </div>
        </>
    )
}

export default Counter
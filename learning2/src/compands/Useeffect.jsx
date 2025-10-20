import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [first, setfirst] = useState(0)
    const [seound, setSeound] = useState(100)
    const [Color, setColor] = useState("red")
    function one() {
        setfirst(first + 1)
    }
    let two = () => {
        setSeound(seound + 10)
    }
    useEffect(() => {
        console.log('useEffect  Btn are click')
    }, [first])


    useEffect(() => {
        let timer = setTimeout(() => {
            setColor("green")
            console.log("useing use_effect color are change.");
        }, 2000)
        return () => clearTimeout(timer)
    }, [Color])
    return (
        <>
            <div className='flex mt-8 flex-col items-center'>
                <h1 className='text-3xl mt-8'>useEffect</h1>
                <h1 className='text-3xl mt-4'>{first}</h1>
                <h1 className='text-3xl mt-4'>{seound}</h1>
                <button onClick={one} className='w-24 h-12 bg-blue-500 text-white rounded-2xl mt-4 cursor-pointer transition-transform duration-150 active:scale-75'>increase</button>
                <button onClick={two} className='w-24 h-12 bg-green-500 text-white rounded-2xl mt-4 cursor-pointer transition-transform duration-150 active:scale-75'>increase</button>
                <p style={{ color: Color, fontSize: '18px' }} className='mt-4'>This is green text</p>
            </div>
        </>
    )
}

export default Useeffect
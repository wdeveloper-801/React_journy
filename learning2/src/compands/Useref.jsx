import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const [first, setfirst] = useState(1)
    let up = () => {
        setfirst(first + 1)
    }
    const a = useRef(1)
    a.current = a.current + 1
    console.log(a.current, "useref hook are working")


    // useEffect(() => {
    //     a.current = a.current + 1
    //     console.log(a.current)
    // })



    return (
        <div className='flex mt-4 flex-col items-center'>
            <button onClick={up} className="w-25 h-12 bg-red-500 text-white rounded-lg flex justify-center items-center cursor-pointer transition-transform duration-150 active:scale-90">  count {first}</button>
        </div>
    )
}

export default Useref
import React, { useState } from 'react'

const First = (props) => {
    const [first, setfirst] = useState("not working")
    let working = () => {
        setfirst("Working")
        alert("Working")

        let set = setTimeout(() => {
            alert("not working")
            setfirst("not working")
        }, 5000);

    }

    const [Number, setNumber] = useState(0)
    function incremant() {
        setNumber(Number + 1)
    }
    function decrement() {

        if (Number > 0) {
            setNumber(Number - 1)
        } else { setNumber(0) }
    }
    return (<>
        <div className='min-w-full h-screen bg-black flex justify-center items-center flex-col'>
            <div className="w-3/12 h-120 bg-blue-700 rounded-2xl flex  items-center flex-col">
                <button onClick={working} className='w-11/12 h-8 rounded-2xl bg-emerald-500 active:scale-95 cursor-pointer mt-4'>click</button>
                <p>{first}</p>
                <p className='text-white'>{props.name}</p>
                <p className='text-white'>{props.age}</p>
                <p className='text-white'>{props.gender}</p>
                <h1>{Number}</h1>
                <button onClick={incremant} className=' w-28 h-12 rounded-2xl bg-emerald-500 active:scale-95 cursor-pointer mt-4'>incremant</button>
                <button onClick={decrement} className=' w-28 h-12 rounded-2xl bg-emerald-500 active:scale-95 cursor-pointer mt-4'>decremant</button>
            </div>
        </div>
    </>
    )
}

export default First
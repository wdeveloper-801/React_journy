import React, { useState, useRef } from 'react'
const Useref2 = () => {

    const [First, setFirst] = useState("")
    let password = useRef(null)
    let form = (e) => {
        e.preventDefault()
        // console.log("form submit by ", First )
        console.log("password is", password.current.value);
        setFirst("")

    }

    const [Showpassowrd, setShowpassowrd] = useState(false)
    let passwordshow = () => {
        setShowpassowrd(!Showpassowrd)
    }

    const getInputType = () => {
        if (Showpassowrd) {
            return "text";
        } else {
            return "password";
        }
    };

    return (
        <>
            <div className="w-full  flex justify-center ">
                <div className="bg-pink-500 w-100 h-32 mt-4 rounded-2xl  ">
                    <form className="flex flex-col items-center" onSubmit={form}  >
                        <input type={getInputType()} className="w-60 rounded-2xl bg-white mt-4 border-2 border-black text-black" value={First} ref={password}
                            onChange={(e) => {
                                setFirst(e.target.value) // console.log(e.target.value);
                            }} />
                        <input type="checkbox" className="mt-2" checked={Showpassowrd} onChange={passwordshow} />
                        <button className="w-32 h-8 bg-purple-500 mt-4 rounded-2xl cursor-pointer active:scale-90">submit</button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Useref2
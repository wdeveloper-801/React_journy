import React, { useState } from 'react'

const Controlled = () => {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Email, setEmail] = useState('')
    let form = () => {
        console.log("form submit");
        setName('')
        setPassword('')
        setEmail('')
    }
    return (
        <div className='flex justify-center items-center  h-screen'>
            <div className='bg-blue-500 w-1/2 flex items-center justify-center flex-col rounded-2xl gap-4 mb-20 h-auto'>
                <h1 className='text-2xl font-bold'>Controlled Component</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    form()
                }} 
                className='flex flex-col'>
                    <input value={Name} onChange={(values) => { setName(values.target.value) }} type="text" placeholder='Enter Name' className='border-2 border-black mt-3' />
                    <input value={Password} onChange={(values) => { setPassword(values.target.value) }} type="password" placeholder='Enter password' id="" className='border-2 border-black mt-3' />
                    <input value={Email} onChange={(values) => { setEmail(values.target.value) }} type="text" placeholder='Enter Email' className='border-2 border-black mt-3' />
                    <button className='bg-green-500 w-50 h-12 cursor-pointer mt-4 active:scale-90'>submit</button>
                </form>
                <h2>{Name}</h2>
                <h2>{Password}</h2>
                <h2>{Email}</h2>
            </div>
        </div>
    )
}

export default Controlled
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Card_details_of_1_Card = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const [first, setfirst] = useState(0)
    let up = () => {
        setfirst(first + 1)
    }
    let down = () => {
        setfirst(down => {
            // Decrease by 1, but never go below 0
            const newValue = down - 1;
            return newValue < 0 ? 0 : newValue;
        });
    }


    return (
        <>
            <div>


                <div className='w-full h-screen flex justify-end items-end '>
                    <div className=' w-2/3 h-full  flex justify-end items-end'>
                        <div className=' w-3/4 h-full'>
                            <img className='w-full h-full' src={state.url} alt="" />
                        </div>
                    </div>
                    <div className='w-1/3 min-h-screen  h-overflox-school flex items-center  flex-col'>
                        <div className='w-11/12 h-full flex flex-col mt-10'>
                            <h1 className='text-3xl font-bold '>{state.name}</h1>
                            <div className='flex mt-5  items-center' >
                                <div className='border-2 rounded-3xl w-18 h-6 flex justify-center items-center'><p className='bold'>sale</p></div>
                                <h1 className='text-3xl  ml-5 '> RS:{state.price}</h1>
                            </div>
                            <hr className='mt-5 mb-3 bg-black w-full' />
                            <p className='text-2xl capitalize'>shoes size: {state.shoes_size}</p>
                            <select id="shoes" name="shoes_size" class="w-1/2 h-10  border border-gray-300 rounded-3xl text-center mt-5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="US 8 / EU 41 / UK 7">US 8 / EU 41 / UK 7</option>
                                <option value="US 9 / EU 42 / UK 8">US 9 / EU 42 / UK 8</option>
                                <option value="US 10 / EU 43 / UK 9">US 10 / EU 43 / UK 9</option>
                                <option value="US 11 / EU 44 / UK 10">US 11 / EU 44 / UK 10</option>
                                <option value="US 12 / EU 45 / UK 11">US 12 / EU 45 / UK 11</option>
                                <option value="US 13 / EU 46 / UK 12.5">US 13 / EU 46 / UK 12.5</option>
                                <option value="US 14 / EU 47 / UK 13.5">US 14 / EU 47 / UK 13.5</option>
                            </select>

                            <h5 className='mt-5'>Quantity</h5>

                            <div className='flex justify-center items-center h-10 w-full border-2'>
                                <button className=' cursor-pointer ' onClick={up}> <Plus className='ml-3' color="#000000" strokeWidth={0.75} /></button>
                                <p className='w-11/12 text-center'>{first}</p>
                                <button className=' cursor-pointer ' onClick={down}>  <Minus color="#000000" strokeWidth={0.75} className='mr-3' />                 </button>
                            </div>

                            <button className='w-full h-12 rounded-3xl bg-black text-white mt-5 cursor-pointer active:scale-90'>Add Cart</button>

                            <h1 className='text-3xl font-bold mt-10'>Product Description</h1>
                            <h2 className='mt-3 text-2xl font-bold '>etc.. {state.ProductDescription}</h2>

                        </div>
                    </div>
                </div>
                    <div className='w-full mt-5 h-screen bg-green-500'></div>
            </div>
        </>
    )
}

export default Card_details_of_1_Card

import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* main div */}
            <div className='bg-gray-300  w-full h-140 flex justify-center items-center flex-col'>

                {/* div inner */}
                <div className=' h-full flex justify-center  w-11/12'>

                    {/* b1 */}
                    <div className='w-1/3 h-10/12 bg-blue-500 flex  items-left flex-col'>
                        <h1 className='font-bold text-2xl'>Don’t miss a thing</h1>
                        <p>Enter your email below to be the first to know about new collections and product launches.</p>
                        <div id='input' className='border-2 border-gray-300 flex justify-center items-center rounded-2xl h-8  '>
                            <input type="text" className='border-none outline-none text-center' placeholder='Start typing...' />
                            <button className='bg-amber-950 rounded-full mr-1 cursor-pointer'><ArrowRight color="#ffffff" /></button>
                        </div>

                        <div className='flex gap-2'>
                        <Facebook  className='cursor-pointer' />
                        <Instagram  className='cursor-pointer' />
                        <Youtube  className='cursor-pointer' />
                        </div>

                    </div>

                    {/* b2 */}
                    <div className='w-1/3 h-10/12 bg-green-500'></div>

                    {/* b3 */}
                    <div className='w-1/3 h-10/12 bg-red-500'></div>
           
                </div>

                {/* bottom div */}
                <div className='w-11/12 h-1/4 flex justify-start  border-t-2 border-t-gray-400'>
                <p className='mt-5'>© Peshawari Chappals 2014-2025</p>
                </div>

            </div>
        </>
    )
}

export default Footer
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
                    <div className='w-1/3 h-10/12 flex  items-left flex-col'>
                        <h1 className='font-bold text-2xl mt-18'>Don’t miss a thing</h1>
                        <p className='mt-3 mb-10'>Enter your email below to be the first to know about new collections and product launches.</p>
                        <div id='input' className='border-2 border-gray-500 flex justify-end items-center rounded-2xl h-8 w-2/4  '>
                            <input type="text" className='border-none outline-none text-center' placeholder='Enter your email address' />
                            <button className='bg-amber-950 rounded-full mr-1 cursor-pointer'><ArrowRight color="#ffffff" /></button>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <Facebook className='cursor-pointer' />
                            <Instagram className='cursor-pointer' />
                            <Youtube className='cursor-pointer' />
                        </div>

                    </div>

                    {/* b2 */}
                    <div className='w-1/3 h-10/12 flex justify-center  flex-col pl-10 items-end'>
                        <ul >
                            <li><h2 className='font-extrabold text-1xl'>Important Links</h2></li>
                            <li>Return & Refunds</li>
                            <li>Privacy Policy</li>
                            <li>Contact Information</li>
                            <li>Our Videos</li>
                            <li>Our Stories</li>
                        </ul>
                    </div>

                    {/* b3 */}
                    <div className='w-1/3 h-10/12  flex justify-center  flex-col pl-10 items-end'>
                        <ul >
                            <li><h2 className='font-extrabold text-1xl'>Contact us</h2></li>
                            <li>+92 333 574 2086</li>
                            <li>+92 305 510 2308</li>
                            <li>info@peshawarichappals.pk</li>
                            <li className='font-extrabold text-1xl'>Find our Location</li>
                            <li>See Our Store</li>
                        </ul>
                    </div>

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
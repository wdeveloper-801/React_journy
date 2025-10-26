import React from 'react'

const Box4 = () => {
    return (
        <>
            <div className='h-screen bg-gray-300 w-full flex  '>

                {/* IMAGE */}
                <div className='h-full w-1/2 flex justify-center items-center '>
                    <div className='w-11/12 h-11/12'>
                        <img src="https://www.peshawarichappals.pk/cdn/shop/files/WhatsApp_Image_2025-10-17_at_20.11.16_ee5cc253.jpg?v=1760808087&width=1500" className='w-full h-full object-cover' alt="" />
                    </div>
                </div>

                {/* TEXT */}
                <div className='h-full w-1/2 flex items-center  '>
                    <div className='text w-11/12 '>
                        <h3 className='font-bold text-2xl'>Norozi Chappal</h3>
                        <h1 className='font-bold text-4xl mt-2'>PeshawariChappalsPK, Since - 2014</h1>
                        <p className='mt-5'>We were born into a family of shoemaker artisans with more than four decades of history. It has helped us to improve more.</p>
                        <button className='border-2 rounded-3xl w-40 h-12 mt-5 cursor-pointer active:scale-90 '>View Collection</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Box4
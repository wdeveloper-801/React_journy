import React from 'react'

const Box5 = () => {
    return (
        <>
            <div className='h-screen bg-gray-300 w-full flex  '>
                {/* TEXT */}
                <div className='h-full w-1/2 flex items-center justify-center  '>
                    <div className='text w-11/12 '>
                        <h3 className='font-bold text-2xl'>Shoes Collection</h3>
                        <h1 className='font-bold text-4xl mt-2'>Elegance Crafted for Every Step</h1>
                        <p className='mt-5'>Explore premium handmade formal shoes for men — leather, dress, and Oxford styles built for comfort, durability, and timeless elegance.</p>
                        <button className='border-2 rounded-3xl w-40 h-12 mt-5 cursor-pointer active:scale-90 '>View Collection</button>
                    </div>
                </div>

                
                {/* IMAGE */}
                <div className='h-full w-1/2 flex justify-center items-center '>
                    <div className='w-11/12 h-full'>
                        <img src="https://www.peshawarichappals.pk/cdn/shop/files/764d5367-8901-4f58-96dc-933bbc69348d.jpg?v=1761156679&width=1500" className='w-full h-full object-cover' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Box5
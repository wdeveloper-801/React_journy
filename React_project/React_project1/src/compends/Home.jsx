
import React, { useState } from 'react'
import Card1 from './Card1'
import Card2 from './Card2'


const Home = () => {


  return (<>

    {/* div main */}
    <div className='w-full h-auto'>

      {/* box1 */}
      <div className='h-140'>
        {/* img div */}
        <div className="imgbox h-11/12">
          <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/kaptan_chappal_Final.jpg?v=1761156471&width=2000" alt="" />
        </div>
      </div>

      {/* box2 */}
      <div className='h-130  w-full '>

        {/* inner box1 */}
        <div className="innertext1 h-15 w-full  flex items-center gap-4 justify-around">

          <div className="text1">
            <h1 className='font-bold text-3xl'>Our Bestsellers</h1>
          </div>

          <div className="text2">
            <p>Discover the latest trends in footwear. Elevate your style with our collection of <br /> fashionable and comfortable Peshawari Chappals today!</p>
          </div>

          <div className="text3">
            <button className='w-30 h-13 text-white bg-black cursor-pointer active:scale-90 rounded-4xl'>View more</button>
          </div>

        </div>

        <Card1/>

      </div>

      <div className="box3 h-80 bg-gray-100 w-full flex justify-center items-center mt-2 mb-2">
        <div className='teexter  w-2/3 h-full '>
          <h1 className='text-4xl text-center font-bold mt-4 mb-4'>Discover Pakistan’s Widest Range of Handmade Peshawari Chappals</h1>
          <p className='mt-10'>PeshawariChappals.pk is Pakistan’s trusted source for original handmade Peshawari chappals, proudly preserving this timeless craft since 2010. Each pair is crafted with premium leather and traditional stitching, reflecting generations of artisan expertise. Our brand stands for quality, heritage, and affordability—offering unmatched comfort and durability. Explore our signature Norozi, Kaptaan, and classic styles, along with new seasonal arrivals that blend tradition with modern flair. From everyday wear to special occasions.</p>
        </div>
      </div>
      <Card2/>
 

    </div >
  </>


  )
}

export default Home
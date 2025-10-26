import { BookImage, Footprints, Hammer, Heart } from 'lucide-react'
import React from 'react'

const The_brand = () => {
  return (
    <>
      {/* main div */}
      <div className='flex justify-center flex-col items-center mt-16'>

        <div className='w-full h-screen flex items-center flex-col'>
          <h1 className='text-6xl mt-5 font-bold'>The brand</h1>
          <div className='w-3/4 h-11/12  mt-10'>
            <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/poster.jpg?v=1756879551&width=2000" alt="" /></div>
        </div>

        {/* box1 */}
        <div className='w-11/12 min-h-120  mb-2 flex flex-col justify-center items-center  '>
          <h2 className='text-3xl font-bold'>It pains us to see these beautiful crafts, rendered pathetic by fashion.
            Born in a country filled with the art and history</h2>
          <p>Art, skill and craftsmanship are transferred from generations to generations. The centuries old techniques never die as the subsequent generations who are the custodians of their long lasting legacy are left with the sacred responsibility to keep them alive. Such is the tradition of the folks living in the south of Punjab province in Pakistan. Situated along the mighty River Indus, the name of the village is Quaidabad, a place rich in cultural values and abundant with artisans blessed with the most delicate of arts.

            It is in this village where “Kalabagh” lived. He was a renowned artisan of the area who earned his living by stitching chappals, sandals and shoes made of leather. In addition, he also used his prolific skill in stitching wardrobe made of leather. But then came a devastating flood and the whole village perished. Among those who managed to flee the destruction brought by the natural calamity, Asad Ullah Khattak was one. He had lost his belongings and property but nothing could falter and deter his great courage.

            Once the adverse effects of the flood subsided, Asad Ullah Khattak along with his like minded artisans and a bunch of educated nephews, decided to harness the tremendous power of the internet to introduce the world to his magical skills. And so came into existence of Peshawari Chappal Store. Supported by the unmatchable skill and craftsmanship of these battle-hardened artisans, we bring to you the most refined handcrafted products you will find anywhere.</p>
        </div>


        {/* box2 */}
        <div className='w-full h-auto flex justify-center pb-20 '>
          <div className='w-1/3 h-full mb-10'>
            <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/7-6_ad535113-5f63-487a-83b9-079dcb0189f9.jpg?v=1757057651&width=800" alt="" />
          </div>
          <div className='w-1/3 h-full  flex items-center flex-col'>
            <h1 className='text-3xl font-bold'>We are proudly Pakistani</h1>

            <div className='flex w-5/6 justify-start mt-4 '>
              <div className='w-20 mr-3 h-10 bg-gray-200 flex justify-center items-center'><Footprints strokeWidth={0.75} /></div>
              <div>
                <h2 className='text-3xl font-bold'>Original Tyre Soles</h2>
                <p className='mt-2'>We only use original tyre soles because they're hard enough, gives beautiful shape to the slipper and have big lives</p>
              </div>
            </div>


            <div className='flex w-5/6 justify-start mt-4 '>
              <div className='w-20 mr-3 h-10 bg-gray-200 flex justify-center items-center'><BookImage strokeWidth={0.75} /></div>
              <div>
                <h2 className='text-3xl font-bold'>Original Tyre Soles</h2>
                <p className='mt-2'>We only use original tyre soles because they're hard enough, gives beautiful shape to the slipper and have big lives</p>
              </div>
            </div>


            <div className='flex w-5/6 justify-start mt-4 '>
              <div className='w-20 mr-3 h-10 bg-gray-200 flex justify-center items-center'><Hammer strokeWidth={0.75} /></div>
              <div>
                <h2 className='text-3xl font-bold'>Original Tyre Soles</h2>
                <p className='mt-2'>We only use original tyre soles because they're hard enough, gives beautiful shape to the slipper and have big lives</p>
              </div>
            </div>


            <div className='flex w-5/6 justify-start mt-4 '>
              <div className='w-20 mr-3 h-10 bg-gray-200 flex justify-center items-center'><Heart strokeWidth={0.75} /></div>
              <div>
                <h2 className='text-3xl font-bold'>Original Tyre Soles</h2>
                <p className='mt-2'>We only use original tyre soles because they're hard enough, gives beautiful shape to the slipper and have big lives</p>
              </div>
            </div>


          </div>
        </div>

        {/* box3 */}
        <div className='w-full min-h-screen flex flex-col items-center pb-5'>

          <h1 className='text-3xl font-bold mt-4'>Our Team</h1>

          {/* 1 */}
          <div className='flex w-4/5 h-70 gap-4 justify-between mt-4'>

            <div className='w-100 h-50'>
              <div>
                <img className='w-full h-full' src="https://www.peshawarichappals.pk/cdn/shop/files/ezgif.com-gif-maker-2.jpg?v=1756894944&width=1100" alt="" />
              </div>
              <h2 className='text-center mt-2 text-2xl font-extralight'>Hamza</h2>
            </div>


            {/* 2 */}


            <div className='w-100 h-50'>
              <div>
                <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/ezgif.com-gif-maker-4-jpg.webp?v=1756895391&width=1500" alt="" />
              </div>
              <h2 className='text-center mt-2 text-2xl font-extralight'>sajid</h2>
            </div>


            {/* 3div */}


            <div className='w-100 h-50'>
              <div>
                <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/ezgif.com-gif-maker-3.jpg?v=1756895402&width=1500" alt="" />
              </div>
              <h2 className='text-center mt-2 text-2xl font-extralight'>Mehmood</h2>
            </div>



            {/* 4div */}


            <div className='w-100 h-50'>
              <div>
                <img className='w-full h-full' src="//www.peshawarichappals.pk/cdn/shop/files/ezgif.com-gif-maker-5.jpg?v=1756895402&width=1500" alt="" />
              </div>
              <h2 className='text-center mt-2 text-2xl font-extralight'>sohil</h2>
            </div>

          </div>
          <h1 className='text-4xl font-bold text-center mt-5 mb-10'>Recognition by International Journals</h1>
          <div className='w-11/12 h-90  flex'>
            <div className='w-1/2 h-80'>
              <video className='w-full h-full' muted autoPlay controls src="https://www.peshawarichappals.pk/cdn/shop/videos/c/vp/fcfa1c85c6594f94a1b334d5fd5a417f/fcfa1c85c6594f94a1b334d5fd5a417f.HD-720p-1.6Mbps-56716844.mp4?v=0"></video>
            </div>
            <div className='w-full h-full flex  items-center  flex-col'>
              <h1 className='text-3xl mt-10'>Acknowledgement by Team BBC Urdu</h1>
              <p className='text-2xl ml-4'>We are highly thankful to the team of BBC Urdu for visiting one of our production houses and highlighting and appreciating the hardwork being done for not only providing quality products and services to our customers but also keeping our products and ways of production in line with the traditional methods that were used by our fore father, which is the essence of these products.</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default The_brand
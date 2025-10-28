import { Minus, Plus } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from "../Context/Cartnumicrease";


const Carddetails_of_inner_Card = () => {
    const { cartCount, setCartCount, cartItems, setCartItems, setBillpage, billpage, } = useContext(CartContext);
    const { state } = useLocation()



    let up = () => {
        setCartCount(cartCount + 1)
    }
    let down = () => {
        setCartCount(down => {
            const newValue = down - 1;
            return newValue < 0 ? 0 : newValue;
        });
    }


    const addToCart = () => {
        // 1️⃣ increase count
        setCartCount(cartCount);

        // 2️⃣ add product to cartItems
        const product = {
            id: state.id,
            name: state.name,
            price: state.price,
            img: state.url,
            quantity: cartCount
        };

        setCartItems(cartItems.concat(product));
        setBillpage(billpage.concat(product));

    };

    const data = [
        { name: "kamran", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "omer", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "zafir", url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "yasir", url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "nami", url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "ullo", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "line", url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "man", url: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "iqbal", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "salmal", url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { name: "hassan", url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=500&q=60", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." }
    ];
    return (
        <>
            {/* main div */}
            <div>

                {/* order div */}

                <div className='w-full h-screen flex justify-end items-end mt-17 '>
                    <div className=' w-2/3 h-full  flex justify-end items-end'>
                        <div className=' w-11/12 mr-10 h-full '>
                            <img className='w-full h-full mt-2' src={state.url} alt="" />
                        </div>
                    </div>
                    <div className='w-1/3 min-h-screen  overflow-y-auto flex items-center  flex-col'>
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
                                <button className=' cursor-pointer ' onClick={() => {
                                    down(), down2()
                                }}>  <Minus color="#000000" strokeWidth={0.75} className='mr-3' />   </button>
                                <p className='w-11/12 text-center'>{cartCount}</p>
                                <button className=' cursor-pointer ' onClick={() => {
                                    up(), up2()
                                }}> <Plus className='ml-3' color="#000000" strokeWidth={0.75} /></button>
                            </div>

                            <button className='w-full h-12 rounded-3xl bg-black text-white mt-5 cursor-pointer active:scale-90' onClick={() => { addToCart() }} >Add Cart </button>


                            <h1 className='text-3xl font-bold mt-10'>Product Description</h1>
                            <h2 className='mt-3 text-2xl font-bold '>etc.. {state.ProductDescription}</h2>

                        </div>
                    </div>
                </div>

                {/* hr */}
                <hr className=' mt-8 w-full bg-black' />

                {/* reviews div */}

                <div className='w-full mt-5 min-h-screen  flex flex-col items-center '>

                    <div className='mt-5 h-full w-11/12 pb-3  flex items-center  flex-col'>

                        <h1 className='text-4xl font-black mt-4 mb-4'>What Our Customers Say</h1>

                        <div className='flex justify-between items-center w-2/5 mt-10'>
                            <div className='flex '>
                                <img className='w-10 h-10 rounded-full' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                                <div className='flex flex-col'>
                                    <h1>Peshawari Chappal Pakistan</h1>
                                    <p>  <span>4.6</span>  ⭐⭐⭐⭐ 311 Google Reviews  </p>
                                </div>
                            </div>
                            <button className='bg-blue-500 w-30 h-13 rounded-4xl text-white '>Write Review</button>
                        </div>
                        {data.map((a, i) => (

                            <div className='w-140 min-h-30 mt-5 border-2 border-gray-200 rounded-2xl'>
                                <div key={i} className='w-full flex justify-between   border-gray-200  '>
                                    <div className='flex items-center'>
                                        <img className='w-10 h-10 rounded-full m-4' src={a.url} alt="pic" />
                                        <h2>{a.name}</h2>
                                        <div className='w-80 relative top-13 left-30   '>
                                            <h2>{a.p}</h2>
                                        </div>
                                    </div>
                                    <p className='mr-2 mt-2'>⭐⭐⭐⭐</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div >
        </>
    )
}

export default Carddetails_of_inner_Card
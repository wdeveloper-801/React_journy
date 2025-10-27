import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card2 = () => {

    let data = [
        {
            id: 1,
            name: "Nike Air Zoom Pegasus 40",
            url: "https://images.unsplash.com/photo-1528701800489-20be9c72d1b8?auto=format&fit=crop&w=500&q=60",
            price: 1200,
            shoes_size: "US 13 / EU 46 / UK 12.5"
        },
        {
            id: 2,
            name: "Adidas Ultraboost 22",
            url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=60",
            price: 1300,
            shoes_size: "US 12 / EU 45 / UK 11.5"
        },
        {
            id: 3,
            name: "Puma RS-X Reinvention",
            url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=500&q=60",
            price: 1400,
            shoes_size: "US 11 / EU 44 / UK 10.5"
        },
        {
            id: 4,
            name: "Reebok Classic Leather",
            url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
            price: 1500,
            shoes_size: "US 10 / EU 43 / UK 9.5"
        },
        {
            id: 5,
            name: "New Balance 574 Core",
            url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=60",
            price: 1600,
            shoes_size: "US 9 / EU 42 / UK 8.5"
        },
        {
            id: 6,
            name: "Vans Old Skool",
            url: "https://images.unsplash.com/photo-1589187155479-69a5f8c0f5d2?auto=format&fit=crop&w=500&q=60",
            price: 1700,
            shoes_size: "US 8 / EU 41 / UK 7.5"
        },
        {
            id: 7,
            name: "Converse Chuck Taylor All Star",
            url: "https://images.unsplash.com/photo-1589187155479-69a5f8c0f5d2?auto=format&fit=crop&w=500&q=60",
            price: 1800,
            shoes_size: "US 8.5 / EU 42 / UK 8"
        },
        {
            id: 8,
            name: "Asics Gel-Kayano 30",
            url: "https://images.unsplash.com/photo-1606813902779-9a4f09f82e97?auto=format&fit=crop&w=500&q=60",
            price: 1900,
            shoes_size: "US 9.5 / EU 43 / UK 8.5"
        },
        {
            id: 9,
            name: "Under Armour HOVR Phantom 2",
            url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
            price: 2000,
            shoes_size: "US 10 / EU 44 / UK 9.5"
        },
        {
            id: 10,
            name: "Jordan Air 1 Retro High OG",
            url: "https://images.unsplash.com/photo-1618354691417-1997f9c3b45b?auto=format&fit=crop&w=500&q=60",
            price: 2100,
            shoes_size: "US 11 / EU 45 / UK 10.5"
        },
        {
            id: 11,
            name: "Nike Air Force 1 ‘07",
            url: "https://images.unsplash.com/photo-1618354691417-1997f9c3b45b?auto=format&fit=crop&w=500&q=60",
            price: 2200,
            shoes_size: "US 12 / EU 46 / UK 11.5"
        },
        {
            id: 12,
            name: "Adidas Yeezy Boost 350 V2",
            url: "https://images.unsplash.com/photo-1579338559194-79cdcdf43c04?auto=format&fit=crop&w=500&q=60",
            price: 2300,
            shoes_size: "US 11 / EU 45 / UK 10.5"
        },
        {
            id: 13,
            name: "Puma Suede Classic",
            url: "https://images.unsplash.com/photo-1579338559194-79cdcdf43c04?auto=format&fit=crop&w=500&q=60",
            price: 2400,
            shoes_size: "US 10 / EU 44 / UK 9.5"
        },
        {
            id: 14,
            name: "New Balance 990v6",
            url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=60",
            price: 2500,
            shoes_size: "US 9 / EU 43 / UK 8.5"
        },
        {
            id: 15,
            name: "Vans Sk8-Hi",
            url: "https://images.unsplash.com/photo-1528701800489-20be9c72d1b8?auto=format&fit=crop&w=500&q=60",
            price: 2600,
            shoes_size: "US 8 / EU 41 / UK 7.5"
        },
        {
            id: 16,
            name: "Reebok Nano X3",
            url: "https://images.unsplash.com/photo-1589187155479-69a5f8c0f5d2?auto=format&fit=crop&w=500&q=60",
            price: 2700,
            shoes_size: "US 9 / EU 42 / UK 8.5"
        },
        {
            id: 17,
            name: "Nike Dunk Low Retro",
            url: "https://images.unsplash.com/photo-1618354691417-1997f9c3b45b?auto=format&fit=crop&w=500&q=60",
            price: 2800,
            shoes_size: "US 10 / EU 44 / UK 9.5"
        },
        {
            id: 18,
            name: "Adidas NMD_R1",
            url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=500&q=60",
            price: 2900,
            shoes_size: "US 11 / EU 45 / UK 10.5"
        },
        {
            id: 19,
            name: "Converse Run Star Hike",
            url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
            price: 3000,
            shoes_size: "US 12 / EU 46 / UK 11.5"
        },
        {
            id: 20,
            name: "Nike Air Max 270",
            url: "https://images.unsplash.com/photo-1528701800489-20be9c72d1b8?auto=format&fit=crop&w=500&q=60",
            price: 3100,
            shoes_size: "US 13 / EU 47 / UK 12.5"
        }
    ];

    const navigate = useNavigate();
    const handleCardClick = (item,) => {
        navigate(`/detail/${item.id}`, { state: item });
        
    };

    return (
        <>
            <div className='min-h-560 w-full'>
                <div className="text flex justify-center items-center h-20">
                    <h1 className='text-4xl font-bold underline '>New Arrivals</h1>
                </div>

                <div className="card w-full h-full flex flex-wrap justify-center items-start  bg-amber-0500 gap-x-15 gap-y-15">
                    {data.map((item) => (
                        <div key={item.id} className='w-80 h-90 mt-2  bg-gray-200 shadow-md hover:scale-105 transition-transform duration-300' >
                            <img onClick={() => handleCardClick(item)} src={item.url} className='h-60 w-full object-cover ' alt={item.name} />
                            <div className="text h-40  flex justify-center items-center flex-col gap-2 " onClick={() => handleCardClick(item)}>
                                <p className='capitalize text-lg'>{item.name}</p>
                                <p className='font-bold pb-5'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn w-full h-20 flex justify-center items-center mt-15 ">
                    <Link to="/more items"><button className='w-30 h-13 text-white bg-black cursor-pointer active:scale-90 rounded-4xl'>Load more</button></Link>
                </div>
            </div>

        </>
    )
}

export default Card2

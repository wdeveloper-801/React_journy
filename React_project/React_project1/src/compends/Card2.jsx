import React from 'react'
import { Link } from 'react-router-dom'

const Card2 = () => {

    let data = [
        {

            id: 1,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1200
        },
        {
            id: 2,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1100
        },
        {
            id: 3,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1300
        },
        {
            id: 4,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1400
        },
        {
            id: 5,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1500
        },
        {
            id: 6,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1600

        },
        {
            id: 7,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1700
        },
        {
            id: 8,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1800

        },
        {
            id: 9,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 1900
        },
        {
            id: 10,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2000
        },
        {
            id: 11,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2100
        },
        {
            id: 12,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2200
        },
        {
            id: 13,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2300
        },
        {
            id: 14,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2400
        },
        {
            id: 15,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2500
        }, {
            id: 16,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2600

        }, {
            id: 17,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2700

        }, {
            id: 18,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2800
        },
        {
            id: 19,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 2900

        },
        {
            id: 20,
            name: "nikitA",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
            price: 3000
        }
    ]
    return (
        <>
            <div className='min-h-560 w-full'>
                <div className="text flex justify-center items-center h-10">
                    <h1 className='text-4xl font-bold underline'>New Arrivals</h1>
                </div>

                <div className="card w-full h-full flex flex-wrap justify-center items-start  bg-amber-0500 gap-x-15 gap-y-15">
                    {data.map((item) => (
                        <div key={item.id} className='w-80 h-90 mt-2 bg-blue-500  shadow-md hover:scale-105 transition-transform duration-300'>
                            <img src={item.url} className='h-60 w-full object-cover ' alt={item.name} />
                            <div className="text h-40 bg-green-400 flex justify-center items-center flex-col gap-2 ">
                                <p className='font-semibold'>ID: {item.id}</p>
                                <p className='capitalize text-lg'>{item.name}</p>
                                <p className='font-bold'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn w-full h-20 flex justify-center items-center mt-15 ">
                    {/* <Link to="/more items"><button className='w-30 h-13 text-white bg-black cursor-pointer active:scale-90 rounded-4xl'>Load more</button></Link> */}
                    <a href="/more items"><button className='w-30 h-13 text-white bg-black cursor-pointer active:scale-90 rounded-4xl'>Load more</button></a>
                </div>
            </div>

        </>
    )
}

export default Card2
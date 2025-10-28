import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Use context/Useconext1';

const Card2 = () => {
    const { data,   setDdata } = useContext(CartContext);
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
                        <div key={item.id} className='w-80 h-90 mt-2 md:max-w-50 sm:max-w-50 xl:max-w-80 lg:max-w-80 2xl:max-w-80 bg-gray-200 shadow-md hover:scale-105 transition-transform duration-300' >
                            <img onClick={() => handleCardClick(item)} src={item.url} className='h-60 w-full object-cover ' alt={item.name} />
                            <div className="text h-40  flex justify-center items-center flex-col gap-2 " onClick={() => handleCardClick(item)}>
                                <p className='capitalize text-lg'>{item.name}</p>
                                <p className='font-bold pb-5'>Price:{item.price}</p>
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

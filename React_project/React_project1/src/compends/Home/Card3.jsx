import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Use context/Useconext1';

const Card3 = () => {
  const [first, setfirst] = useState(21)
  const { data,   setDdata } = useContext(CartContext);

  let navigate = useNavigate()
  const handleCardClick = (item) => {
    navigate(`/detail/${item.id}`, { state: item });
    
  };

  return (
    <>
      <div className='h-auto pb-30  '>

        <div className='h-40 w-full flex justify-center items-center'>
          <h1 className='text-5xl font-bold mt-5'>Shop</h1>
        </div>

        <div className='w-11/12 h-10 flex justify-between items-center ml-13'>
          {first} <div className='  w-50 h-10 flex justify-center items-center '>
            <h2 className='text-center w-90 mb-2'>Sort by</h2>
            <select className="rounded-2xl border-2 text-center pt-1 pb-2 mb-2 w-170 " name="sort" id="sort">
              <option value="relevance">best seling</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className='min-h-560  border-t-2  border-black w-full flex'>
          {/* in this box why height full not apply */}
          <div className='w-80 ml-3  h-140 mt-17 bg-blue-500'>
            <p>cll</p>
          </div>

          <div className="card w-9/12 h-full flex flex-wrap justify-center items-start  gap-x-15 gap-y-15 mt-15 cursor-pointer" onClick={() => handleCardClick(item)}>
            {data.map((item) => (
              <div key={item.id} className='w-80 h-90 mt-2 bg-gray-300  shadow-md hover:scale-105 transition-transform duration-300'>
                <img src={item.url} className='h-60 w-full object-cover ' alt={item.name} onClick={() => handleCardClick(item)} />
                <div className="text h-40 flex justify-center items-center flex-col gap-2  " onClick={() => handleCardClick(item)}>
                  <p className='capitalize text-lg'>{item.name}</p>
                  <p className='font-bold pb-10'>Price:{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  )
}

export default Card3

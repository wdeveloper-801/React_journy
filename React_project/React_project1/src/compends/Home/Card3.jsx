import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card3 = () => {
  const [first, setfirst] = useState(21)

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
    },
    {
      id: 21,
      name: "nikitA",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
      price: 3000
    }
  ]
  let navigate = useNavigate()
  const handleCardClick = (item, i) => {
    navigate(`/detail/${i}`, { state: item });
  };

  return (
    <>
      <div className='h-auto pb-30  '>

        <div className='h-40 w-full flex justify-center items-center'>
          <h1 className='text-4xl font-bold '>Shop</h1>
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
              <div key={item.id} className='w-80 h-90 mt-2 bg-blue-500  shadow-md hover:scale-105 transition-transform duration-300'>
                <img src={item.url} className='h-60 w-full object-cover ' alt={item.name} onClick={() => handleCardClick(item)} />
                <div className="text h-40 bg-green-400 flex justify-center items-center flex-col gap-2  " onClick={() => handleCardClick(item)}>
                  <p className='font-semibold'>ID: {item.id}</p>
                  <p className='capitalize text-lg'>{item.name}</p>
                  <p className='font-bold'>{item.price}</p>
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
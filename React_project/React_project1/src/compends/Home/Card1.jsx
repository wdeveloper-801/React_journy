import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Card1 = () => {


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
  }

];


  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex(prev => (prev === data.length - 1 ? 0 : prev + 1));
  };
  const navigate = useNavigate();

  const handleCardClick = (item, i) => {
    navigate(`/detail/${i}`, { state: item });
  };



  return (

    <>

      {/* inner box1 */}
      <div className="innertext1 min-h-15 w-full  flex items-center gap-4 justify-center mt-5 flex-col lg-flex-row xl:flex-row 2xl:flex-row">

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
      <div className="relative w-full h-109  flex items-center justify-center overflow-hidden">

        {/* Prev Button */}
        <button onClick={prevSlide} className="bg-black w-12 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-4 z-10">  <ChevronLeft color="#ffffff" /></button>


        {/* Cards */}
        <div className="w-full h-100   flex items-center justify-center overflow-hidden">
          <div className=" flex gap-4 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 225}px)` }} >
            {data.concat(data).map((item, i) => (
              <div key={i}  className=" w-40 lg:w-60 xl:w-60 2xl:w-60 h-80 bg-white shadow-lg rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => handleCardClick(item, i)} >
                <img src={item.url} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                <p className="mt-2 font-semibold text-center hover:underline cursor-pointer">{item.name}</p>
                <p className="mt-2 font-semibold text-center hover:underline cursor-pointer">{item.price}</p>
              </div>
            ))}
          </div>
        </div>



        {/* Next Button */}
        <button onClick={nextSlide} className="bg-black w-12 h-10 rounded-full flex justify-center items-center cursor-pointer absolute right-4 z-10">  <ChevronRight color="#ffffff" /> </button>

      </div>
    </>
  );
};

export default Card1;
import React, { useState, useEffect, useContext } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/Cartnumicrease';

const Card1 = () => {

  const { data,   setDdata } = useContext(CartContext);
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
                <p className="mt-2 font-semibold text-center hover:underline cursor-pointer">Price:{item.price}</p>
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
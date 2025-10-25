import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Card1 = () => {
  const data = [
    { name: "Image 1", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 2", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 3", url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 4", url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 5", url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 6", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 7", url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 8", url: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 9", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 10", url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=500&q=60" },
    { name: "Image 11", url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=500&q=60" }
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
    <div className="relative w-full h-[400px]  flex items-center justify-center overflow-hidden">
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="bg-black w-12 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-4 z-10"
      >
        <ChevronLeft color="#ffffff" />
      </button>


      {/* Cards */}
      <div className="w-[800px] h-80 flex items-center justify-center">
        <div className="flex gap-4">
          {data.concat(data).slice(index, index + 8).map((item, i) => (
            <div key={i} className="w-64 h-80 bg-white shadow-md rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 " onClick={() => handleCardClick(item, i)}>
              <img src={item.url} alt={item.name} className="w-full h-48 object-cover rounded-md" />
              <p className="mt-2 font-semibold text-center hover:underline cursor-pointer">   {item.name}   </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="bg-black w-12 h-10 rounded-full flex justify-center items-center cursor-pointer absolute right-4 z-10"
      >
        <ChevronRight color="#ffffff" />
      </button>
    </div>
  );
};

export default Card1;

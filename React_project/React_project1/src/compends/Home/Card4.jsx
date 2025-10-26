import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card4 = () => {
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

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const handleCardClick = (item, i) => {
        navigate(`/detail/${i}`, { state: item });
    };

    return (
        <>
            {/* Header Section */}
            <div className="innertext1 w-full flex items-center justify-around mt-5">
                <div className="text1 flex justify-center items-center flex-col">
                    <h1 className="font-bold text-4xl">Our Testimonials</h1>
                    <p>See reviews & feedback from our valuable customers</p>
                </div>
            </div>

            {/* main card stating */}
            <div className="relative w-full h-100 flex items-center justify-center overflow-hidden">

                {/* Prev Button */}
                <button onClick={prevSlide} className="bg-black w-12 h-10 rounded-full flex justify-center items-center cursor-pointer absolute left-4 z-10 hover:scale-110 transition-transform"    >  <ChevronLeft color="#ffffff" /> </button>

                {/* Cards Container */}
                <div className="w-full h-100 overflow-hidden relative pt-10">
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 270}px)`, }} >
                        {data.map((item, i) => (
                            <div key={i} className="min-w-[250px] h-80 bg-white shadow-md rounded-lg p-2 flex flex-col transition-all duration-300 cursor-pointer hover:scale-105 border-2 mx-2" onClick={() => handleCardClick(item, i)}  >
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className="mt-5">{item.p}</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <img className="w-14 h-14 rounded-full object-cover" src={item.url} alt={item.name} />
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button onClick={nextSlide}     >  <ChevronRight color="#ffffff" />          </button>
            </div>
        </>
    );
};

export default Card4;

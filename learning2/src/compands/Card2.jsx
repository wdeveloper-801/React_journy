import React from 'react'
import { useState, useEffect } from 'react'
import { Bookmark } from 'lucide-react';
const Card2 = () => {



    const [Pic, setPic] = useState([])

    const api = async () => {
        let count = 51;
        const res = await fetch(`https://randomuser.me/api/?results=${count}&inc=name,dob,picture`);
        let done1 = await res.json();
        console.log(done1);

        let final_user = (done1.results.map((a) => {
            return {
                title: a.name.title,
                first: a.name.first,
                last: a.name.last,
                age: a.dob.age,  // renamed ageer to age
                img: a.picture.large
            }
        }))
        setPic(final_user)
    };
    useEffect(() => {
        api();
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {Pic.map(({ title, first, last, age, img }, index) => (
                    <div 
                        key={index}
                        className="w-90  bg-gray-600 rounded-lg m-4 flex flex-col items-center p-6 border-2 border-amber-50 hover:scale-110 transition duration-500 ease-in-out "    >
                        <img src={img} alt={`${first} ${last}`} className="w-32 h-32 rounded-full object-cover" />
                        <h2 className="mt-4 text-2xl text-white w-11/12">{`Name: ${title} ${first} ${last}`}</h2>
                        <p className="mt-2 text-white">Age: {age}</p>
                        <button className="bg-white p-2 mt-4 mb-4 text-black rounded-lg cursor-pointer active:scale-90">
                            View Profile
                        </button>
                   
                        <Bookmark size={16} color="#ffffff" strokeWidth={1} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card2
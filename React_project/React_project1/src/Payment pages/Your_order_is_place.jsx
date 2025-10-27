
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";


const Your_order_is_place = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        // show tick after component mounts
        setShow(true);
    }, []);
    return (
        <>
            <div className="flex items-center justify-center min-h-screen flex-col bg-gray-100">
                <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center
          bg-green-500 text-white text-4xl font-bold
          transform transition-all duration-700
          ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
                >
              <Check size={80} strokeWidth={3} />
                </div>
                <h1 className="text-3xl font-bold mt-4">Order is Order is confirm</h1>
            </div>
        </>
    )
}

export default Your_order_is_place
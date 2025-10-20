import { TextAlignJustify } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [Sidebar, setSidebar] = useState(false)
    const sidebar_open = () => setSidebar(true)
    const sidebar_close = () => setSidebar(false)
    return (<>

        {!Sidebar &&
            <button className=" ml-4  mt-20" onClick={sidebar_open} ><TextAlignJustify /></button>

        }
        {Sidebar &&
            <div className="w-50 h-screen mt-16 bg-gray-600 text-white fixed top-0 left-0 ">
                <button onClick={sidebar_close} className="cursor-pointer m-4">  <TextAlignJustify />  </button>
                <div className=" flex flex-col justify-center items-center gap-1">
                    <Link to="/page1">Card1</Link>
                    <Link to="/page2">Card2</Link>
                    <Link to="/page3">Counter</Link>
                    <Link to="/page4">Form handling</Link>
                    <Link to="/page5">Use_effect</Link>
                    <Link to="/page6">UseRef</Link>
                </div>
            </div>
        }
    </>
    );
};

export default Sidebar;

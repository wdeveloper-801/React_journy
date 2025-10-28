import { List } from 'lucide-react';
import { ListChecks } from 'lucide-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Datashare } from '../Usecontext/Usecontext';
const Header = () => {
    let { Siderbar, setSiderbar } = useContext(Datashare)
    let on = () => {
        setSiderbar(!Siderbar)
    }
    return (
        <div className='w-full h-10 flex justify-center gap-2 items-center bg-blue-500 px-4'>
            <Link to="/secoundpage" className='text-white font-bold'>Next</Link>
            <Link to="/home" className='text-white font-bold'>Home</Link>
            <button className='  cursor-pointer' onClick={on} ><List /></button>
        </div>
    );
};

export default Header;

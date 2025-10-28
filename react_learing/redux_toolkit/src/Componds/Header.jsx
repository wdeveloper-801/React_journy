import { CircleChevronLeft, CircleChevronRight, House } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
        console.log("Navigated to home");
    };

    const goBack = () => {
        navigate(-1);
        console.log("Navigated back");
    };

    const goForward = () => {
        navigate(1);
        console.log("Navigated forward");
    };

    return (
        <div className='w-full h-10 bg-blue-500 flex items-center space-x-4 px-4'>
            <button onClick={goHome}><House /></button>
            <button onClick={goForward}><CircleChevronRight /></button>
            <button onClick={goBack}><CircleChevronLeft /></button>
            <Link to="/homepage">Home</Link>
            <Link to="aboutpage">about</Link>
        </div>
    );
};

export default Header;

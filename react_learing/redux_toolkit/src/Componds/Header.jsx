import { CircleChevronLeft, CircleChevronRight, House, TextAlignJustify } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../Redux/Counter';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='w-full h-10 bg-blue-500 flex items-center justify-center px-4'>
      <div className='flex space-x-2'>
        <button onClick={() => navigate('/')}><House /></button>
        <button onClick={() => navigate(1)}><CircleChevronRight /></button>
        <button onClick={() => navigate(-1)}><CircleChevronLeft /></button>
      </div>
      <div className='flex space-x-4'>
        <Link to="/homepage">Home</Link>
        <Link to="/aboutpage">About</Link>
      </div>
      <button onClick={() => dispatch(toggleSidebar())}>     <TextAlignJustify /> </button>
    </div>
  );
};

export default Header;

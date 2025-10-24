import {  useEffect } from 'react'
import {  Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import Sidebar from './Components/Sidebar';
import { toast, Flip } from 'react-toastify';
function App() {
  
  useEffect(() => {
    toast.success('Welcome to my website.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
      transition: Flip,
    });

  }, [])

  return (
    <>
      <Nav />
      <Sidebar />
      <Outlet />
    </>
  )
}


export default App

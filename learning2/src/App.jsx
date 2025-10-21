import { useState, useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './compands/Nav';
import Notfound from './pages/Notfound';
import MAN_TSHIRT from './pages/MAN_TSHIRT';
import Man_trouzer from './pages/Man_trouzer';
import Courses from './pages/Courses';
import Courses_details from './pages/Courses_details';
import Sidebar from './compands/Sidebar';
import Page1 from './pages/page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import { toast, Flip } from 'react-toastify';
import Page8 from './pages/Page8';
import Useeffect from './compands/Useeffect'




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


  return (<>
    <Nav />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />  {/* default route */}
      <Route path="/home2" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="man_Tshirt" element={<MAN_TSHIRT />} />
        <Route path="man_trouzer" element={<Man_trouzer />} />
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<Courses_details />} />
      <Route path="/contact" element={<Useeffect />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page/card_inner_view" element={<Page8 />} />

      <Route path="*" element={<Notfound />} />
    </Routes>

  </>
  )
}


export default App

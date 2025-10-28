import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Notfound from './pages/Notfound.jsx'
import Page12 from './pages/page12.jsx'
import Page11 from './pages/Page11.jsx'
import Page10 from './pages/Page10.jsx'
import Page9 from './pages/Page9.jsx'
import Page8 from './pages/Page8.jsx'
import Page7 from './pages/Page7.jsx'
import Page6 from './pages/Page6.jsx'
import Page5 from './pages/Page5.jsx'
import Page4 from './pages/Page4.jsx'
import Page3 from './pages/Page3.jsx'
import Page2 from './pages/Page2.jsx'
import Page1 from './pages/page1.jsx'
import Useeffect from './Components/Useeffect.jsx'
import Courses_details from './pages/Courses_details.jsx'
import Courses from './pages/Courses.jsx'
import Man_trouzer from './pages/Man_trouzer.jsx'
import MAN_TSHIRT from './pages/MAN_TSHIRT.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/' element={<Home />} />
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
            <Route path="/page9/controlled_input" element={<Page9 />} />
            <Route path="/page10/uncontrolled_input" element={<Page10 />} />
            <Route path="/page11/Higher Order Components (HOC)" element={<Page11 />} />
            <Route path="/page12/RenderPropsPattern" element={<Page12 />} />
            <Route path="*" element={<Notfound />} />
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <>
        <ToastContainer />
        <RouterProvider router={router} />
    </>
);

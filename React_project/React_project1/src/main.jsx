import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './compends/Home/Home.jsx'
import The_brand from './compends/The Brand/The brand.jsx'
import Card3 from './compends/Home/Card3.jsx'
import Carddetails_of_inner_side from './compends/Home/Carddetails_of_inner_side.jsx'
import Useconext1 from './compends/Use context/Useconext1.jsx'
import { ToastContainer } from 'react-toastify'
import Addrespage from './Payment pages/addrespage.jsx'
import Your_order_is_place from './Payment pages/Your_order_is_place.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/the_brand' element={<The_brand />} />
            <Route path='/more items' element={<Card3 />} />
            <Route path="/detail/:id" element={<Carddetails_of_inner_side />} />
            <Route path='/address_confirm_page' element={<Addrespage />} />
            <Route path='/Order_confirm' element={<Your_order_is_place />} />
        </Route>
    )
)
createRoot(document.getElementById('root')).render(

    <Useconext1>
        <ToastContainer />
        <RouterProvider router={router} />
    </Useconext1>
)

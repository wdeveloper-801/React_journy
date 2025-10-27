import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './compends/Home/Home.jsx'
import The_brand from './compends/The Brand/The brand.jsx'
import Card3 from './compends/Home/Card3.jsx'
import Card_details_of_1_Card from './compends/Home/Carddetails_of_inner_Card.jsx'
import Cartnumicrease from './compends/Context/Cartnumicrease.jsx'
import { ToastContainer } from 'react-toastify'
import Addrespage from './Payment pages/addrespage.jsx'
import Your_order_is_place from './Payment pages/Your_order_is_place.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/the_brand' element={<The_brand />} />
            <Route path='/more items' element={<Card3 />} />
            <Route path="/detail/:id" element={<Card_details_of_1_Card />} />
            <Route path='/address_confirm_page' element={<Addrespage />} />
            <Route path='/Order_confirm' element={<Your_order_is_place />} />


        </Route>
    )
)
createRoot(document.getElementById('root')).render(

    <Cartnumicrease>
        <ToastContainer />
        <RouterProvider router={router} />
    </Cartnumicrease>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './compends/Home.jsx'
import The_brand from './compends/The brand.jsx'
import Card3 from './compends/Card3.jsx'
import Card_details_of_1_Card from './compends/Carddetails_of1Card.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/the_brand' element={<The_brand />} />
            <Route path='/more items' element={<Card3 />} />
            <Route path="/detail/:id" element={<Card_details_of_1_Card />} />

          
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

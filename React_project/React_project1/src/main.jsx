import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './compends/Home.jsx'
// import About from './compends/About.jsx'
import The_brand from './compends/The brand.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/the_brand' element={<The_brand />} />
            {/* <Route path='/contact' element={<Contact />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/github' element={<Github />} /> */}
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

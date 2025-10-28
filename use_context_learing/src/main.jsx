
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usecontext from './Usecontext/Usecontext.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import A from './Componds/A.jsx'
import Home from './Componds/Home.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='/home' element={<Home />} />
            <Route path='/secoundpage' element={<A />} />
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    <Usecontext>
        <RouterProvider router={router} />
    </Usecontext>
)

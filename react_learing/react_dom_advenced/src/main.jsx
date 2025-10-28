
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Children, StrictMode } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './compends/Home/Home.jsx';
import About from './compends/About/About.jsx';
import Contact from './compends/Contact/Contact.jsx';
import User from './compends/User/User.jsx';
import Github from './compends/Github/Github.jsx';

// 1way
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />
//             },
//             {
//                 path: "about",
//                 element: <About />
//             }, {
//                 path: "contact",
//                 element: <Contact />
//             }
//         ]
//     }
// ])
// 2 way
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            {/* <Route path='/' element={<Layout />} > */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/github' element={<Github />} />
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <RouterProvider router={router} />
    /* </StrictMode> */
);

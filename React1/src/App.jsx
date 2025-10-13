import { useContext, useState } from "react";
import "./App.css";
import './index.css'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Database, DatabaseZap, DeleteIcon, Edit } from 'lucide-react';
import Card from "./components/card";
import Api from "./components/Api";
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Page_header from "./pages/Page_header";
import Context from "./context/UserContext";
import { Datacontext } from "./context/UserContext";





function App() {

    // // exapmle1
    const [a, setA] = useState("??")
    function namechanger(params) {
        setA("kamran")
    }

    // example2
    const [A, setB] = useState(1)
    function add() {
        setB(A + 1)
    }
    function sub() {
        setB(() => {
            if (A > 0) {
                return A - 1
            } else {
                return 0
            }
        })
    }

    // exaplme3   
    const [N, setN] = useState("")
    function reload(e) {
        e.preventDefault()
        console.log("form_subimted");
        console.log(N);
        setN("")
    }

    // exapmle4
    //   react Components part1
    let num = 10
    let users = [
        {
            "username": "alex_01",
            "city": "New York",
            "country": "USA"
        },
        {
            "username": "maria_l",
            "city": "Madrid",
            "country": "Spain"
        },
        {
            "username": "kenji88",
            "city": "Tokyo",
            "country": "Japan"
        },
        {
            "username": "fatima.z",
            "city": "Cairo",
            "country": "Egypt"
        }
    ]

    return (
        <>

            {/*  exapmle1 */}
            <div className="w-96 h-72  flex  items-center flex-col rounded-2xl bg-green-500 m-4" >
                <h1 className="text-2xl font-bold">testing</h1>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus expedita ipsa soluta blanditiis magnam accusamus sequi et. Temporibus sapiente dolor voluptate, dolorem vero, at, iusto magnam amet vitae ullam modi?</p>
                <button className="bg-blue-500 p-2 rounded-lg active:scale-90 w-32 " onClick={namechanger}>click</button>
                <p className="p2">{a}</p>
            </div>

            {/* example2 */}

            <div className="w-80 h-32  flex  items-center flex-col rounded-2xl bg-red-500 justify-center m-4 ">
                <p>{A}</p>
                <button className="bg-blue-500 p-2 rounded-lg active:scale-90 w-32 mb-1 " onClick={add}>increase</button>
                <button className="bg-blue-500 p-2 rounded-lg active:scale-90 w-32 " onClick={sub}>decrese</button>
            </div >

            {/* example 3 */}
            <div className="bg-amber-600 w-80 h-22  flex  flex-col rounded-2xl   m-4 items-center">
                <h1>testing</h1>
                <form onSubmit={reload}>
                    <input className="border-black bg-blue-200 " value={N} onChange={(e) => setN(e.target.value)} type="text" />
                    <button className="w-32 h-8 bg-blue-500 rounded-lg active:scale-90">click</button>
                </form>
            </div>

            <Navbar />
            <Footer a={num} />
            <Footer a="saeed" />
            <Footer a="ali" />


            {/* exapmle4 */}
            <div className="flex">
                {users.map((user) => {
                    return (
                        <Card
                            Key={user.username}
                            username={user.username}
                            city={user.city}
                            country={user.country} />
                    )
                })}
            </div>

            <div>
                {/* icon import from sir */}
                <Database size={30} />
                <Edit />
                <DeleteIcon />
                <DatabaseZap />
                {/* exapmle 5 */}
                <Api />
            </div>
        </>
    )

    // react router dom
    // return (
    //     <>
    //         <Page_header />
    //         <div>
    //             <Routes>
    //                 <Route path="/about" element={<About />} />
    //                 <Route path="/contact" element={<Contact />} />
    //             </Routes>
    //         </div>
    //     </>

    // )


    // contact form react
    // let data = useContext(Datacontext)
    // alert(data);
    // return (
    //     <>
    //         <div className="flex justify-center items-center flex-col mt-4">
    //             <h1 className="bg-amber-600">this is app {data}</h1>
    //         </div>
    //     </>
    // )
}

export default App;

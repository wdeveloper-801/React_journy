import { ArrowLeft, ArrowRight, House } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
    let home = useNavigate()
    let btn_clicked = () => {
        home("/")
        console.log("btn is clicked in about");

    }
    let btn_clicked2 = () => {
        home(-1)
        console.log("btn is clicked2 in about");
    }
    let btn_clicked3 = () => {
        home(+1)
        console.log("btn is clicked2 in about");
    }
    return (
        <>
            <div className="w-full h-16 bg-cyan-700 flex justify-between items-center px-4 fixed top-0">
                <div className="flex justify-center items-center gap-4">
                    <button onClick={btn_clicked} className="   cursor-pointer ">  <House /></button>
                    <h2 className="text-2xl font-bold text-white">Navbar</h2>
                </div>
                <div  className="flex justify-center items-center gap-1">
                    <Link className="ml-4 text-1xl font-bold text-white" to="/home2">Home</Link>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/about">About</Link>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/courses">courses</Link>
                    <Link className="ml-4 text-1xl font-bold text-white" to="/contact">Contact</Link>
                    <button onClick={btn_clicked2} className=" cursor-pointer "><ArrowLeft /></button>
                    <button onClick={btn_clicked3} className=" cursor-pointer "><ArrowRight /></button>
                    
                </div>

            </div>
        </>
    )
}

export default Nav

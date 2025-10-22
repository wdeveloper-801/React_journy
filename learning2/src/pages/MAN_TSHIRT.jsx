import React from 'react'
import { Link, Outlet } from 'react-router-dom'
let a = "hello "
const About = () => {
  return (
    <div>
      <span>
        {a}
      </span>
     <h1 className="text-center text-4xl font-bold underline mt-4 mb-4">MAN_TSHIRT</h1>
    </div>
  )
}

export default About

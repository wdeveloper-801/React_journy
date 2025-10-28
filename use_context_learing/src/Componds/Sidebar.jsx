import React, { useContext } from 'react'
import { Datashare } from '../Usecontext/Usecontext'

const Sidebar = () => {
  let { Siderbar, setSiderbar } = useContext(Datashare)
  return (
    <>
      <div  className={`w-1/5 bg-blue-800 h-full text-white p-4 fixed top-0 right-0 transform transition-transform duration-500 ease-in-out   ${Siderbar ? 'translate-x-0' : 'translate-x-full' }`}    >        Sidebar</div>


    </>
  )
}

export default Sidebar
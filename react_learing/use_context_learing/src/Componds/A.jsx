import React, { useContext } from 'react'
import { Datashare } from '../Usecontext/Usecontext'


const A = () => {
  let {up,down,first} = useContext(Datashare)
  return (
    <div className='w-full h-screen flex   items-center flex-col '>
      <h1 className='mt-20' >num:{first}</h1>
      <button onClick={up} className='w-20 h-10 bg-blue-500 mt-5 rounded-2xl   cursor-pointer active:scale-90 '  >up</button>
      <button onClick={down} className='w-20 h-10 bg-orange-500 mt-5 rounded-2xl  cursor-pointer active:scale-90 '>up</button>
    </div>
  )
}

export default A
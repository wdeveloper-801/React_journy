import React, { createContext } from 'react'

export const Datacontext = createContext()
const UserContext = ({ children }) => {

  let username = "John Doe"
  return (
    <div className="flex justify-center items-center flex-col ">
      <Datacontext.Provider value={username}>
        <h1>{children}</h1>
        </Datacontext.Provider>

      <h1 className='bg-black text-teal-50 mt-1'>UserContext</h1>
    </div>
  )
}

export default UserContext
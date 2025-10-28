import React, { createContext, useState } from 'react'

export let Datashare = createContext()
const Usecontext = ({ children }) => {
  const [first, setfirst] = useState(0)
  const [Siderbar, setSiderbar] = useState(false)
  let up = () => setfirst(first + 1)
  let down = () => {
    setfirst(down => {
      const newValue = down - 1;
      return newValue < 0 ? 0 : newValue;
    });
  }

  return (
    <div>
      <Datashare.Provider value={{ up, down, first,Siderbar, setSiderbar }}>
        {children}
      </Datashare.Provider>
    </div>
  )
}

export default Usecontext
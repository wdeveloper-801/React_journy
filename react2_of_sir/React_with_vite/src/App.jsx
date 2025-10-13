import { useState } from 'react'
import './index.css'
import First from './Compunennts/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <First name="karna" age="25" gender="male" />


    </>
  )
}

export default App

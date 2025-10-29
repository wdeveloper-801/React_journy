import { useState } from 'react'
import Header from './Componds/Header'
import { Outlet } from 'react-router-dom'
import { Sidebar } from 'lucide-react'
import Siderbar from './Componds/Siderbar'


function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
       <div className="flex flex-col h-screen">
      {/* Top Header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Main routed content on the LEFT */}
        <main className="flex-1 p-4 overflow-auto ">
          <Outlet />
        </main>

        {/* Sidebar on the RIGHT */}
        <Siderbar />
      </div>
    </div>

    </>
  )
}

export default App

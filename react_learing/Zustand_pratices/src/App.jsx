import Header from './Components/Hearder'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Content area: Outlet + Navbar */}
      <div className="flex flex-1">
        {/* Main content */}
        <main className="flex-1  text-white">
          <Outlet />
        </main>

        {/* Right-side Navbar */}
        <Navbar />
      </div>
    </div>
  )
}

export default App

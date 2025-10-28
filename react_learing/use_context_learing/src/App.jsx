import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Componds/Header';
import Sidebar from './Componds/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body: main content + sidebar */}
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex flex-1 bg-orange-200 p-4">
          <Outlet />
        </div>

        {/* Sidebar on the right */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

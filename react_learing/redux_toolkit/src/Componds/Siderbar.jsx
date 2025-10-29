import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const sidebarOpen = useSelector((state) => state.counter.sidebarOpen);

  return (
    <div
      className={`fixed top-0 right-0 light-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="p-4 text-xl">Sidebar</h2>
      <ul>
        <li className="p-4 hover:bg-gray-700">Menu 1</li>
        <li className="p-4 hover:bg-gray-700">Menu 2</li>
        <li className="p-4 hover:bg-gray-700">Menu 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 hidden md:block">
      <div className="text-2xl font-bold mb-8">Soar Task</div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
          Dashboard
        </Link>
        <Link to="/settings" className="hover:bg-gray-700 px-3 py-2 rounded">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

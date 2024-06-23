import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="absolute top-0 flex flex-row items-center justify-center">
      <ul className="flex flex-row items-center gap-10 justify-around">
        <li className="transition duration-150 hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="transition duration-150 hover:text-red-500">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="transition duration-150 hover:text-red-500">
          <Link to="/newSubscription">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

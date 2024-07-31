import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context";

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {
  const context = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav className=" px-3 bg-black text-white flex justify-between items-center sticky z-10 top-0 w-full py-5 md:px-8 text-sm font-light ">
        <ul className="flex items-center md:gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory()}>
              Hummer
            </NavLink>
          </li>
        </ul>

        <ul className="hidden md:flex space-x-7 ">
          <li>
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
        </ul>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden bg-ocean-blue-600 py-4 px-6 space-y-4">
          <li className="border p-2 rounded-full hover:bg-white/20 border-white">
            <a className="block w-full h-full  rounded-full">Home</a>
          </li>
        </ul>
      )}
    </div>
  );
};

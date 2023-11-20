import React, { useState } from "react";
import Logo from "/src/assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { logoutUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <div className="navbar bg-base-100 h-24 px-24 pt-10 max-sm:flex-col max-sm:gap-y-5 max-sm:mb-24 max-sm:px-0">
      <div className="flex-1">
        <Link to="/" className="flex flex-col items-center">
          <img src={Logo} alt="CareerConnect logo" className="w-20" />
          <h2 className="text-primary-color font-bold mt-1 text-lg">
            CareerConnect
          </h2>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setDarkMode((current) => !current)}
          >
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li
                onClick={() =>
                  dispatch(logoutUser("You logged out successfully"))
                }
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

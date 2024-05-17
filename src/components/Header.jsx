import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../AuthContaxt";

const Header = () => {
  const { user, logOut } = UserAuth();

  const handelSignOut = async () => {
    try {
      await logOut();
      
    } catch (err) {
      console.log(err)
      
    }
    
  }

  return (
    <div className="bg-gray-900 text-white">
      <ul className="flex justify-center p-4">
        <li className="mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-white"}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-white"}`
            }
          >
            Help
          </NavLink>
        </li>
        <li className="mx-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-white"}`
            }
          >
            Contact
          </NavLink>
        </li>
        {user?.displayName ? (
          <div className="flex justify-between gap-3 ml-60">
            <button onClick={handelSignOut} className="bg-blue-500 h-8 px-4 rounded-lg">
            log out
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-3 ml-60">
            <button className="bg-blue-500 h-8 px-4 rounded-lg">
              <NavLink to="/signup">Sign in</NavLink>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;

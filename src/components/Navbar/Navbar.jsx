/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ signOut, isAuth }) => {
  return (
    <nav className="w-full flex h-20 justify-between items-center px-10 bg-[[rgba(0,0,0,1)]] border-[rgba(255,255,255,0.4)] border-b-[1px] shadow-2xl">
      <div className="text-3xl text-white font-bold">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
          alt="Blog"
          className="size-[50px] inline mr-2"
        />
        Best<span className="text-emerald-400 font-bold">Blogs.</span>
      </div>
      <div className="flex gap-10 font-semibold">
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? "under nav-links" : "nav-links"
          }
          to="/"
        >
          Home
        </NavLink>
        {isAuth && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "under nav-links" : "nav-links"
            }
            to="/createpost"
          >
            Create Post
          </NavLink>
        )}
        {isAuth ? (
          <button
            onClick={signOut}
            className="text-[#ff3232] font-bold hover:scale-110 active:scale-95"
          >
            SignOut
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "under nav-links" : "nav-links"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

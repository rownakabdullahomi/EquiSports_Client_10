import { useContext, useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Bounce } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const { user, userLogout } = useContext(AuthContext);

  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all_equipments">All Sports Equipments</NavLink>
      </li>
      <li>
        <NavLink to="/add_equipments">Add Equipments</NavLink>
      </li>
      <li>
        <NavLink to="/my_equipments">My Equipments List</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/blogs">
            Blogs
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("Logout Successful!");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error("Error logging out! " + error.message);
      });
  };

  return (
    <div>
      <div className="navbar py-2">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          {/* Branding */}
          <Bounce>
            <Link
              to="/"
              className="hidden lg:block text-4xl font-extrabold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-purple-600"
            >
              EquiSports
            </Link>
          </Bounce>

          {/* Dropdown */}
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost" aria-label="Toggle Menu">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 ">
              <li className="font-extrabold italic text-4xl my-2 mx-auto tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-purple-600">
                <Link to="/">EquiSports</Link>
              </li>

              {links}
            </ul>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 font-semibold">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          {/* <p className="text-sm text-gray-500">{user && user.email}</p> */}
          {/* User Image */}
          <div>
            <a
              data-tooltip-id="userTooltip" // Tooltip ID
            >
              {user && user.email ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              ) : (
                <div data-tooltip-id="logoutTooltip">
                  <FaCircleUser className="text-4xl" />
                </div>
              )}
            </a>
            {/* Tooltip component */}
            <Tooltip id="userTooltip" place="bottom" type="dark" effect="float">
              <div style={{ textAlign: "center" }}>
                <p className="font-semibold">{user && user.displayName}</p>
                <p className="text-sm text-gray-400">{user && user.email}</p>
              </div>
            </Tooltip>
            <Tooltip id="logoutTooltip" place="left" type="dark" effect="float">
              <div style={{ textAlign: "center" }}>
                <p className="font-semibold">Hello</p>
                <p className="text-sm text-gray-400">Login for more!!</p>
              </div>
            </Tooltip>
          </div>

          {/* Basic Tooltip saved for future */}
          {/* <div className="tooltip tooltip-left" data-tip="Name & Email">
            <div className="relative group">
              {user && user?.email ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              ) : (
                <FaCircleUser className="text-4xl cursor-pointer" />
              )}
              <div className="absolute hidden group-hover:block bg-white text-black p-4 rounded-md shadow-lg top-12 right-0">
                <p className="font-semibold">{user && user.displayName}</p>
                <p className="text-sm text-gray-500">{user && user.email}</p>
                
              </div>
            </div>
          </div> */}

          {user && user?.email ? (
            <Link
              onClick={handleLogout}
              className="btn btn-sm btn-outline btn-neutral bg-white px-6"
            >
              Logout
            </Link>
          ) : (
            location.pathname !== "/register" &&
            location.pathname !== "/login" && (
              <Link
                to="/login"
                className="btn btn-sm btn-outline btn-neutral bg-white px-6"
              >
                Login
              </Link>
            )
          )}

          {/* <header className="flex justify-between items-center">
            <button onClick={toggleTheme} className="btn btn-sm btn-outline">
              Toggle Theme
            </button>
          </header> */}

          {/* Theme Change */}
          <div className="form-control">
            <label
              className="label cursor-pointer tooltip tooltip-bottom"
              data-tip="Change theme"
            >
              {/* <span className="label-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</span> */}
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

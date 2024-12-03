import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    </>
  );

  return (
    <div>
      <div className="navbar py-2">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          {/* Branding */}
          <Link
            to="/"
            className="hidden lg:block text-4xl font-extrabold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-gray-900 to-purple-700"
          >
            EquiSports
          </Link>

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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 text-black">
              <li className="font-bold italic text-2xl my-2 mx-auto">
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
          {/* User Image */}
          <div className="tooltip tooltip-bottom" data-tip="Profile">
            <div className="relative group">
              <FaCircleUser className="text-4xl cursor-pointer" />
              <div className="absolute hidden group-hover:block bg-white text-black p-4 rounded-md shadow-lg top-12 right-0">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">johndoe@example.com</p>
                <Link
                  to="/profile"
                  className="btn btn-sm btn-primary mt-2 w-full"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/login"
            className="btn btn-sm btn-outline btn-neutral bg-white px-6"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

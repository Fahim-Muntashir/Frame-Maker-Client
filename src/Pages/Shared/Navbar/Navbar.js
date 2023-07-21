import React, { useContext, useState } from "react";
import logo from "../../../logo.png";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleLogOut = () => {
    logOut();
    console.log(user);
  };

  return (
    <div className="shadow-sm">
      <Container>
        <nav className="relative text-white flex justify-between items-center bg-black">
          <img width="200px" src={logo} alt="" />

          {/* Burger menu */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={handleMenuToggle}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {/* Main Navbar links */}
          <ul
            className={`${
              isMenuOpen ? "hidden" : "hidden"
            } lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-8`}
          >
            <li>
              <Link className="font-normal" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-normal" to="/instructor">
                Instructors
              </Link>
            </li>
            <li>
              <Link className="font-normal" to="#">
                Classes
              </Link>
            </li>
            {user ? (
              <li>
                <Link className="fomt-normal" to="#">
                  Dashboard
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          {user ? (
            <details className="dropdown hidden lg:block">
              <summary className="avatar cursor-pointer w-12 online">
                <img className="rounded-full" src={user.photoURL} alt="" />
              </summary>
              <ul className="pt-5 shadow menu dropdown-content z-[1] bg-white rounded-box w-32 me-auto">
                <p className="text-black mb-4 font-bold">{user?.displayName}</p>
                <button
                  onClick={handleLogOut}
                  className="text-center w-full rounded-lg mb-0 p-2 font-bold btn-primary"
                >
                  Log Out
                </button>{" "}
              </ul>
            </details>
          ) : (
            <>
              {" "}
              <Link
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                to="/login"
              >
                Sign In
              </Link>
              <Link
                className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                to="/signup"
              >
                Sign Up
              </Link>{" "}
            </>
          )}
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="navbar-menu relative z-50">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                  <a
                    className="mr-auto text-3xl font-bold leading-none"
                    href="#"
                  >
                    {/* SVG Logo */}
                  </a>
                  <button className="navbar-close" onClick={handleMenuClose}>
                    <svg
                      className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <ul className="text-center ">
                    <li className="my-4">
                      <Link className="font-bold text-black" to="#">
                        Home
                      </Link>
                    </li>
                    <li className="my-4">
                      <Link className="font-bold text-black" to="/instructor">
                        Instructors
                      </Link>
                    </li>
                    <li className="my-4">
                      <Link className="font-bold text-black" to="#">
                        Classes
                      </Link>
                    </li>
                    {user ? (
                      <li className="my-4">
                        <Link
                          className="fomt-normal font-bold text-black"
                          to="#"
                        >
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
                <div className="mt-auto">
                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="btn w-full font-bold btn-primary"
                    >
                      Log Out
                    </button>
                  ) : (
                    <div className="pt-6">
                      <Link
                        to="/login"
                        className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                      >
                        Sign in
                      </Link>
                      <Link
                        className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </nav>
      </Container>{" "}
    </div>
  );
};

export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/Logos.png";
import logo_M from "../../../assets/Mobile_Logo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import Menu from "./Menu";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Menu from "./Menu";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`${import.meta.env.VITE_DataHost}/ProductAddToCart?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, [user]); // Refetch whenever the user changes
  // Periodically refetch data every 5 seconds (adjust the interval as needed)
  useEffect(() => {
    const intervalId = setInterval(fetchData, 1000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [user]); // Refetch whenever the user changes





  const handleLogOut = () => {
    logOut();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className=" flex items-center md:hidden justify-between px-3">
        <Link to="/">
          <div className="">
            <img src={logo_M} alt="logo" className="w-[35px] h-[25px]" />
          </div>
        </Link>
        <div>
          <Searchbar />
        </div>
        <div className="pr-2">
          {" "}
          {/* cart  */}
          <Link to='/Product_Cart'>
            <div className="flex">
              <FiShoppingCart className="text-[18px]  text-[#f85606] hover:bg-black/10  cursor-pointer rounded-md" />
              <p className="text-[10px] -mt-[11px]"><span className="border-[1px] border-orange-500 rounded-full pt-[1px] px-[2px]">{data.length}</span></p>
            </div>
          </Link>
        </div>
        {/* ---- */}
        <div>
          {/* Create Profile Drop Down */}
          {user ? (
            <div className="flex justify-center items-center gap-3 ml-2">
              <img
                src={user.photoURL}
                alt=""
                className="rounded-full-ex cursor-pointer "
                onClick={toggleDropdown}
              />

              <button onClick={handleLogOut}>Logout</button>
            </div>
          ) : (
            <img
              src="https://i.ibb.co/q91jPZq/josh-d-avatar.jpg"
              alt=""
              width={25}
              className="rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
          )}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white rounded-md shadow-md p-2 z-50 w-32">
              <ul className="space-y-2">
                {user ? (
                  <>
                    <li className="pt-2">
                      <Link to="/profile">Profile</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="pt-2">
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* navbar  */}
      <nav className="bg-primaryColor2 w-full py-4 sticky top-0 left-0 hidden  z-30  md:block">
        <div className="myContainer">
          <div className="flex items-center justify-between gap-3">
            {/* logo */}
            <Link to="/">
              <div className="">
                <img src={logo} alt="logo" className="w-[60px] h-[40px]" />
              </div>
            </Link>

            {/* nav menu  */}
            {/* <div className="flex gap-x-2">
              <span className="text-xl font-semibold text-white cursor-pointer">
                Cosmetics
              </span>

              <span className="text-xl font-semibold text-white cursor-pointer">
                Cloths
              </span>
            </div> */}

            <Menu></Menu>

            {/* search bar  */}
            <div className=" bg-white rounded-md px-2 py-[.35rem] flex items-center flex-1">
              <input
                type="text"
                placeholder="Search here"
                className=" border-none outline-none w-full h-full"
              />
              <CiSearch className="cursor-pointer text-primaryColor1 text-lg bg-primaryColorLight w-7 h-7 rounded-full p-1 font-bold" />
            </div>
            {/* profile */}
            <div className="flex items-center gap-2 font-semibold text-whiteText  capitalize ">
              {user ? (
                <div className="flex justify-center items-center gap-2">
                  <button onClick={handleLogOut}>Logout</button>
                  <img
                    src={user.photoURL}
                    alt=""
                    width={25}
                    className="rounded-full"
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  {/* login  */}
                  <Link
                    to="/login"
                    className="flex items-center  gap-1 text-lg font-semibold text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md"
                  >
                    <FaRegUser className="text-xl" />
                    <span>login</span>
                  </Link>

                  {/* sign up  */}
                  <Link to="/register">
                    {" "}
                    <p className=" text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md">
                      Sign up
                    </p>{" "}
                  </Link>
                </div>
              )}

              {/* cart  */}
              <Link to='/Product_Cart'>
                <div className="flex">
                  <FiShoppingCart className="text-4xl  text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md" />
                  <p className="text-[14px] -ml-[7px]"><span className="border-[1px] border-white rounded-full pt-[2px] px-1 ">{data.length}</span></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export function MemoryLogin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 1h12v1h1v18h-1v1H5v-1H4v-6h2v5h10V3H6v5H4V2h1V1m3 5h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1H8v-2h1v-1h1v-1H2v-2h8V9H9V8H8V6Z"
      ></path>
    </svg>
  );
}

export default Header;

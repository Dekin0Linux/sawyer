import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/sawyerLogo.png'

// icons
import { FcHome, FcLibrary ,FcStatistics,FcSimCardChip} from "react-icons/fc";

function Sidebar() {
  const logout=()=>{
    localStorage.removeItem('token')
  }
  return (
    <div>
      <div className="bg-[#f2f4f5] py-16 hidden md:block h-screen">
        <div className="w-[200px] ">
          <Link to={"/dashboard"}>
            <img src={logo} alt="logo" className="w-[100%]"/>
          </Link>
        </div>

        <ul className="">
          <Link to={"/dashboard"}>
            <li className="p-5 flex items-center gap-3 px-10 text-xl hover:bg-white hover:text-[#01537b] transition-all duration-75 hover:font-bold">
              <FcHome /> Dashboard
            </li>
          </Link>
          <Link to={"/dashboard/accounts"}>
            <li className="p-5 flex items-center gap-3  px-10 text-xl hover:bg-white hover:text-[#01537b] transition-all duration-75 hover:font-bold">
              {" "}
              <FcLibrary /> Accounts
            </li>
          </Link>
          <Link to={"/dashboard/card"}>
            <li className="p-5 flex items-center gap-3 px-10 text-xl hover:bg-white hover:text-[#01537b] transition-all duration-75 hover:font-bold">
              <FcSimCardChip/>
              Card
            </li>
          </Link>
          <Link to={"/dashboard/transactions"}>
            <li className="p-5 flex items-center gap-3 px-10 text-xl hover:bg-white hover:text-[#01537b] transition-all duration-75 hover:font-bold">
              <FcStatistics/>
              Transactions
            </li>
          </Link>
          <button onClick={logout} className="p-2 text-white w-50 rounded m-5 flex bg-red-400 items-center gap-3 px-14 text-xl hover:bg-red-800 hover:text-white transition-all duration-75 hover:font-bold">Logout</button>
        </ul>
      </div>
      {/* MOBILE TABS */}
      <div className="fixed bottom-0 md:hidden block bg-[#edeeee] w-screen p-5 shadow-lg ">
        <div className="flex justify-evenly text-2xl">
          <NavLink to={"/dashboard"} >
            <FcHome />
          </NavLink>
          <NavLink to={"/accounts"}>
            <FcLibrary />
          </NavLink>
          <NavLink to={"/card"}><FcSimCardChip/></NavLink>
          <NavLink to={"/transactions"}><FcStatistics/></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

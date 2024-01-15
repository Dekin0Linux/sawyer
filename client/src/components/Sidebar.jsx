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
      <div className=" py-9 px-5 hidden md:block h-screen shadow-md">
        <div className="w-[200px] ">
          <Link to={"/dashboard"}>
            <img src={logo} alt="logo" className="w-[100%]"/>
          </Link>
        </div>

        <ul className=" ">
          <Link to={"/dashboard"} className="">
            <li className="py-5 flex items-center gap-3 text-xl hover:bg-white hover:px-5 hover:rounded-lg hover:shadow-lg transition-all duration-75 hover:font-bold">
              <FcHome size={30}/> Dashboard
            </li>
          </Link>
          <Link to={"/dashboard/accounts"}>
            <li className="py-5 flex items-center gap-3 text-xl hover:bg-white hover:px-5 hover:rounded-lg hover:shadow-lg transition-all duration-75 hover:font-bold">
              {" "}
              <FcLibrary size={30} /> Accounts
            </li>
          </Link>
          <Link to={"/dashboard/card"}>
            <li className="py-5 flex items-center gap-3 text-xl hover:bg-white hover:px-5 hover:rounded-lg hover:shadow-lg transition-all duration-75 hover:font-bold">
              <FcSimCardChip size={30}/>
              Card
            </li>
          </Link>
          <Link to={"/dashboard/transactions"}>
            <li className="py-5 flex items-center gap-3 text-xl hover:bg-white hover:px-5 hover:rounded-lg hover:shadow-lg transition-all duration-75 hover:font-bold">
              <FcStatistics size={30}/>
              Activities
            </li>
          </Link>
          <button onClick={logout} className="py-2 text-white w-50 rounded my-5 flex bg-red-400 items-center gap-3 px-14 text-xl hover:bg-red-800 hover:text-white transition-all duration-75 hover:font-bold">Logout</button>
        </ul>
      </div>
      {/* MOBILE TABS */}
      <div className="fixed bottom-0 md:hidden block bg-[#edeeee] w-screen p-5 shadow-lg ">
        <div className="flex justify-evenly text-2xl">
          <NavLink to={"/dashboard"} >
            <FcHome />
          </NavLink>
          <NavLink to={"/dashboard/accounts"}>
            <FcLibrary />
          </NavLink>
          <NavLink to={"/dashboard/card"}><FcSimCardChip/></NavLink>
          <NavLink to={"/dashboard/transactions"}><FcStatistics/></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

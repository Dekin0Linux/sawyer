import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import axios from "axios";
import APIURL from "../apiUrl";
import LoaderComp from "../components/Loader";

function Accounts() {
  const [user, setUser] = useState({});
  const [loader,setLoader] = useState(true)
  useEffect(() => {
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location="/") : ''
    // GETTING ACCOUNT DATA
    const getAcc = async () => {
      let getData = await axios.post(`${APIURL}/account/getById`, {clientid});
      if(getData){
        setLoader(false)
        setUser(getData.data);
      }
    };

    getAcc();
  }, [user]);

  return (
    <div className="flex-1 bg-[#f6fdff] md:px-16 px-5 overflow-auto">
      {loader ? <LoaderComp/> : ''}
      <Topbar title={"Accounts"} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div>
          <h3 className="md:text-xl text-lg md:py-3">User Account Detail</h3>
          <ul class=" text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Name : {user?.user?.firstname} {user?.user?.lastname}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Email : {user?.user?.email}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Account Number : {user?.accountNumber}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Account Type : {user?.accountType}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Account Status : {user?.status}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Phone : {user?.user?.phone || 'N/A'}
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="md:text-xl text-lg md:py-3">Contact Us</h3>
          <ul class=" text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              email : info@sawyerbank.com
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              phone: {user?.user?.email}
            </li>
          
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Accounts;

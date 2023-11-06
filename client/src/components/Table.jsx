import React, { useState, useEffect } from "react";
import axios from "axios";
import APIURL from "../apiUrl";
import LoaderComp from "./Loader";



function Table() {
  const [activites, setActivites] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [active, setActive] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const reversedData = activites.reverse();
  const currentItems = activites.slice(indexOfFirstItem, indexOfLastItem);

 

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(activites.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    


    //REDDIRECT USER IF THE TOKEN IS NOT AVAILABLE
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location = "/") : "";
    // GETTING CARD DATA
    const getActivity = async () => {
      let getData = await axios.post(`${APIURL}/transaction/usertransactions`, {
        clientid,
      });
      setLoader(false);
      const reversedData = getData.data.reverse();
      setActivites(reversedData);
    };

    getActivity();
  }, [activites]);

  return (
    <div className="rounded-lg md:w-full bg-white w-auto">
      {loader ? <LoaderComp /> : ""}
      <table className="w-full border divide-y divide-gray-200 overflow-auto">
        <thead className="bg-gray-50">
          <tr className="">
            <th
              scope="col"
              className="md:px-6 px-2 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="md:px-6 px-2 py-3  text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="md:px-6 px-2 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="md:px-6 px-2 py-3 text-left text-md font-bold text-gray-500 uppercase tracking-wider"
            >
              status
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 text-lg overflow-auto w-auto">
          {currentItems &&
            currentItems?.map((eachData, index) => {
              return (
                <tr key={index}>
                  <td className="md:px-6 w-10 lg:w-auto px-2 py-4 whitespace-nowrap text-sm md:text-md">
                    {eachData?.date}
                  </td>
                  <td className="md:px-6 w-10 lg:w-auto px-2 py-4 whitespace-nowrap text-sm md:text-md overflow-auto">
                    {/* {eachData.type.length > 5
                      ? eachData.type.substring(0, 5) + "..."
                      : eachData.type} */}
                      <p className="md:w-auto w-10">{eachData.type}</p>
                      
                  </td>

                  <td className="md:px-6 px-2 py-4 whitespace-nowrap text-sm md:text-md font-semibold ">
                    {eachData.currency}{" "}
                    {eachData.amount
                      ?.toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </td>
                  <td
                    className={`md:px-6 py-4 whitespace-nowrap font-bold text-sm md:text-md  ${
                      eachData?.status == "Success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <span className={`${eachData?.status == "Success"? " border border-green-300": "border border-red-500"} rounded-full px-3 py-1`}>
                     {eachData.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          {/* pagination */}
          
        </tbody>
      </table>
      <ul className="flex justify-center gap-1">
        {pageNumbers?.map((number) => (
          <li
            key={number}
            className={`px-3 border ${active == number ? "bg-blue-300" : ""} rounded-full`}
            onClick={() => {
              setCurrentPage(number)
              setActive(number)
            }}
          >
            <button>{number}</button>
          </li>
        ))}
      </ul>


     

      {pageNumbers?.length <= 0 ? (
        <p className="text-center text-xl font-bold p-10 text-red-500">
          No Activities
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Table;

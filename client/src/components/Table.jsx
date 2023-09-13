import React, { useState, useEffect } from "react";
import axios from "axios";
import APIURL from "../apiUrl";
import LoaderComp from "./Loader";

function Table() {
  const [activites, setActivites] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [active, setActive] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const reversedData = activites.reverse();
  const currentItems = reversedData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(activites.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
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
    <div className="rounded-lg md:w-full bg-white">
      {loader ? <LoaderComp /> : ""}
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr>
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

        <tbody className="bg-white divide-y divide-gray-200 text-lg">
          {currentItems &&
            currentItems?.map((eachData, index) => {
              return (
                <tr key={index}>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap text-sm md:text-md">
                    {eachData?.date}
                  </td>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap text-sm md:text-md">
                    {eachData.type.length > 5
                      ? eachData.type.substring(0, 5) + "..."
                      : eachData.type}
                  </td>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap text-sm md:text-md ">
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
                    {eachData.status}
                  </td>
                </tr>
              );
            })}
          {/* pagination */}
        </tbody>
      </table>
      <ul className="flex justify-center gap-1">
        {pageNumbers.map((number) => (
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

      {activites.length <= 0 ? (
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

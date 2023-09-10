import React, { useState, useEffect } from "react";
import axios from "axios";
import APIURL from "../apiUrl";
import LoaderComp from "./Loader";

function Table() {
  const [activites, setActivites] = useState([]);
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location = "/") : "";
    // GETTING CARD DATA
    const getActivity = async () => {
      let getData = await axios.post(`${APIURL}/transaction/usertransactions`, {
        clientid,
      });
      setLoader(false);
      setActivites(getData.data);
    };

    getActivity();
  }, [activites]);
  return (
    <div className="rounded-lg w-full bg-white">
      {loader ? <LoaderComp/> : ''}
      <table className="min-w-full divide-y divide-gray-200">
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
          {activites &&
            activites?.map((eachData, index) => {
              return (
                <tr key={index}>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                    {new Date(eachData?.date).toLocaleDateString()}
                  </td>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap ">
                    {eachData.type}
                  </td>
                  <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                    {eachData.currency}{" "}
                    {eachData.amount
                      ?.toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </td>
                  <td
                    className={`md:px-6 py-4 whitespace-nowrap font-bold  ${
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
        </tbody>
      </table>
      {activites.length <= 0 ? <p className="text-center text-xl font-bold p-10 text-red-500">No Activities</p> : ''}
    </div>
  );
}

export default Table;

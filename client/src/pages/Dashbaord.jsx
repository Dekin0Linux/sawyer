import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Topbar from "../components/Topbar";
import LineChart from "../components/Chart";
import BalanceCard from "../components/BalanceCard";
import Atm from "../components/Atm";
import axios from 'axios'
import APIURL from "../apiUrl";

import CurrencyConverter from "../components/CurrencyConverter";
import Table from "../components/Table";

// f836299eef-1f2824aa53-rz0ylq
import TransferModal from "../components/TransferModal";
import DepositModal from "../components/DepositModal";
import LoaderComp from "../components/Loader";

function Dashbaord() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loader,setLoader] = useState(true)
  const[data,setData]=useState([])
  const[cards,setCards]=useState([])
  // modals
  const [openTrasnfer, setOpenTransfer] = React.useState(false);
  const handleTransferOpen = () => setOpenTransfer(true);
  const handleTransferClose = () => setOpenTransfer(false);
  const date = new Date().toDateString()
  var currentTime = new Date();

  // Get the current hour, minute, and second
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();

  useEffect(()=>{
    //get token from localstorage
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location="/") : ''
    

    // GETTING ACCOUNT DATA
    const getAcc = async()=>{
      let getData = await axios.post(`${APIURL}/account/getById`, {clientid} )
      setLoader(false)
      setData(getData.data)
    }

    // GETTING CARD DATA
    const getCards = async()=>{
      let getData = await axios.post(`${APIURL}/card/usercards`, {clientid} )
      if(getData){
        setLoader(false)
        setCards(getData.data)
        
      }
    }

    // GETTING TRANSACTION DATA
    
    getAcc()
    getCards()
  },[data,cards,currentTime])


  return (
    <div className="flex-1 bg-[#f6fdff] lg:px-10 md:px-5 overflow-auto ">
      {loader ? <LoaderComp/> : ''}
      
      <Topbar title={"Dashboard"} username={data}/>
      <TransferModal openTransferModal={openTrasnfer} closeTrasnferModal={handleTransferClose} />
      <DepositModal openModal={open} closeModal={handleClose} />

      <div className="bg-gradient-to-r from-blue-900 to-blue-500 p-5 mx-2 md:mx-0 rounded-md text-white shadow-lg">
        <h1 className="md:text-3xl text-xl">Welcome {data?.user?.firstname} {data?.user?.lastname}</h1>
        <div>{date} {currentHour}:{currentMinute}</div>
        <hr className="my-2"/>
        <p className="md:text-xl font-bold"><span>Account # : </span> {data?.accountNumber}</p>
      </div>

      {/* content here */}
      <div className="mt-2 mb-5 mx-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 md:gap-5 ">
          <div className="md:col-span-2 md:order-first">
            {/* cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-2" >
              <BalanceCard title={"Available Balance"} amount={data?.balance} currency={data?.currency}/>
              <BalanceCard title={"Savings"} amount={data?.total} currency={data?.currency}/>
              <BalanceCard title={"Fixed Deposit"} amount={data?.loanBalance}  currency={data?.currency}/>
            </div>

            <div className="lg:py-5 rounded-md md:col-span-2 grid md:grid-cols-2 gap-3">
              {/* <LineChart /> */}
              {
                cards && cards?.map((card,index)=>{
                    return  cards.length >=1 && <Atm detail={card}/>
                })
              }
              {cards.length <= 0 ? "No cards Available" : ''}
             
            </div>
            

            {/* transaction history */}
            <div className="md:mb-10 mb-20 my-5 bg-white p-4 shadow-lg rounded-lg">
              <p className="text-xl text-slate-500 w-full">Recent Activities</p>

              <Table/>

            </div>
            {/* end of transaction history */}
          </div>

          {/* second col */}
          <div className="md:p-5 order-first">

            {/* TRANSFER AND DEPOSIT BUTTONS */}
            <div className="flex justify-between md:gap-5 gap-2 mb-5 text-white">
              <button
                className="bg-[#0153fb] p-3 rounded-lg flex-1 shadow-lg"
                onClick={handleTransferOpen}
              >
                Transfer
              </button>
              <button
                className="bg-green-500 p-3 rounded-lg flex-1 shadow-lg"
                onClick={handleOpen}
              >
                Deposit
              </button>
            </div>

            {/* ATM CARD  put something herer behind the butons*/}
            <div className="bg-white shadow-md rounded-md">
              <p className="text-xl font-semibold px-4">News</p>
              {/* News Cards */}
              <div>
                
              </div>
            </div>
            

            {/* CURRENCY CONVERTER */}
            {/* <CurrencyConverter/> */}
          </div>
          {/* end of second col */}
        </div>
      </div>
      {/* content container ends here */}
    </div>
  );
}

export default Dashbaord;

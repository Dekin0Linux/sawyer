import React,{useState,useEffect} from "react";
import Topbar from "../components/Topbar";
import Atm from "../components/Atm";
import Table from "../components/Table";
import axios from 'axios'
import APIURL from "../apiUrl";

function Cards() {
  const[cards,setCards]=useState([])
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location="/") : '' 
    // GETTING CARD DATA
    const getCards = async()=>{
      let getData = await axios.post(`${APIURL}/card/usercards`,{ clientid} )
      setLoader('false')
      setCards(getData.data)
    }

    getCards()
  },[])
  return (
    <div className="flex-1 bg-[#f6fdff] md:px-16  px-5 overflow-auto mb-20">
      <Topbar title={"Cards"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {
          cards && cards.map((eachCard,index)=>{
            return <Atm key={index} detail={eachCard}/>
          })
        }
        {cards.length <= 0 ? "No cards Available" : ''}
      </div>

      <div className="shadow-lg  p-5 rounded-md my-5">
        <p className="text-xl text-slate-400 pb-5">Card Activites</p>
        <Table/>
      </div>
    </div>
  );
}

export default Cards;

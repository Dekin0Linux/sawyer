import React,{useState,useEffect} from "react";
import Topbar from "../components/Topbar";
import Atm from "../components/Atm";
import Table from "../components/Table";
import axios from 'axios'
import APIURL from "../apiUrl";
import LoaderComp from "../components/Loader";

function Cards() {
  const[cards,setCards]=useState([])
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    let clientid = localStorage.getItem("token");
    !clientid ? (window.location="/") : '' 
    // GETTING CARD DATA
    const getCards = async()=>{
      let getData = await axios.post(`${APIURL}/card/usercards`,{ clientid} )
      setLoader(false)
      setCards(getData.data)
    }

    getCards()
  },[])

  
  return (
    <div className="flex-1 md:px-16  px-5 overflow-auto mb-20">
      {loader ? <LoaderComp/> : ''}
      <Topbar title={"Cards"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {
          cards && cards.map((eachCard,index)=>{
            return <Atm key={index} detail={eachCard}/>
          })
        }
      </div>
        {cards.length <= 0 ? <p className="font-semibold text-center text-2xl">No Card Available</p> : ''}

      {
        cards.length <= 0 ? '' :
     
      <div className="shadow-lg bg-white  p-5 rounded-md my-5">
        <p className="text-xl text-slate-400 pb-5">Activites</p>
        <Table/> 
      </div>
       }
    </div>
  );
}

export default Cards;

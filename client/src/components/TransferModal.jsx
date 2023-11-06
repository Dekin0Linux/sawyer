
import React,{useState,useEffect} from "react";
import { customAlphabet } from 'nanoid';
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import axios from "axios";
import APIURL from "../apiUrl";


const TransferModal = ({ openTransferModal, closeTrasnferModal }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [transfer,setTransfer] = useState({})
  const [code,setCode] = useState('')
  const numericAlphabet = '0123456789';
  const generateNumericString = customAlphabet(numericAlphabet, 6);
  const token = generateNumericString()

  // Get the current date
const currentDate = new Date();
// Create functions to add leading zeros if needed
function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}
// Format the date as "dd/mm/yyyy"
const formattedDate = `${addLeadingZero(currentDate.getDate())}/${addLeadingZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`;


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const uId = localStorage.getItem('token')
    closeTrasnferModal() 
    
    let data = {...transfer,code:token,user:uId,date:formattedDate};
    await axios.post(`${APIURL}/transaction`, data )
    .then(res=>{
      console.log('File Sent')
    }).catch(err=>[
      console.log(err)
    ])
    // show SC modal
    swal("Enter Authorization Code:", {
      content: "input",
      button : 'Transfer'
    })
    .then(async(value) => {
      let sCode = localStorage.getItem('scode') //get code stored in localstorage
      sCode = JSON.parse(sCode)
      if(sCode === value){
        swal({
          title: "Success",
          text: "Transaction Initiated....",
          icon: "success",
        });
      }else{
        swal({
          title: "Failed",
          text: "Transfer failed , Kindly enter the correct Authorization code",
          icon: "error",
        });
      }
    });
    localStorage.setItem('scode',JSON.stringify(token))
  }


  const questions = [
    "What is the name of your first pet?",
    "What is your favorite movie?",
    "What is your favorite movie?",
    "What was the name of your first school?",
  ];



  return (
    <>
      <Modal open={openTransferModal} onClose={closeTrasnferModal}>
        <Modal.Header>
          <Modal.Title className="text-xl font-semibold text-blue-700 ">
            FUNDS TRANSFER
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="md:p-5">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Name of Beneficiary
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                 onChange={(e)=>setTransfer({...transfer, receivername : e.target.value})}
                 required
              />
            </div>

            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Bank Name
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Bank name"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, bankname : e.target.value})}
                required
              />
            </div>

            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Account Number
              </label>{" "}
              <br />
              <input
                type="number"
                placeholder="Enter account number"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, accnumber : e.target.value})}
                required
              />
            </div>

            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Amount
              </label>{" "}
              <br />
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, amount : e.target.value})}
                required
                min={10}
              />
            </div>
            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                SWIFT/IBAN/Routing Number
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter SWIFT/IBAN/Routing Number"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, routing : e.target.value})}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Beneficiary Username
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, receiverusername : e.target.value})}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Beneficiary password
              </label>{" "}
              <br />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer, password : e.target.value})}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="name" className="font-normal">
                Security questions 
              </label>{" "}
              <br />
              <select
                type="text"
                className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                onChange={(e)=>setTransfer({...transfer,question : e.target.value})}
                required
              >
                {/* questions */}
                {questions.map((q, index) => (
                  <option value={q} key={index}>{q}</option>
                ))}
              </select>
            </div>
            {
              <div className="my-3">
                <label htmlFor="name" className="font-normal">
                  Security Answer
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Enter answer"
                  className="w-full border-2 rounded p-2 border-slate-200 outline-none"
                  onChange={(e)=>setTransfer({...transfer, answer : e.target.value})}
                  required
                />
              </div>
            }
            <div className="my-3">
                <button type="submit" required className="bg-blue-700 text-white w-full rounded-md p-2" onClick={handleOpen}>Submit</button>
              </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button  appearance="subtle" required className="bg-red-400 text-white">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TransferModal;

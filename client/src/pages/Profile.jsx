import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import axios from 'axios'
import APIURL from '../apiUrl'


function Profile() {
    const [user,setUser] = useState({})
    // useEffect(()=>{
    //     let clientid = {clientid : "64bd2261c2d28f5f97ad610a"} 
    // // GETTING ACCOUNT DATA
    //     const getAcc = async()=>{
    //     let getData = await axios.post(`${APIURL}/account/getById`, clientid )
    //     setUser(getData.data)
    //     console.log(getData.data)
    //     }

    //     getAcc ()

    // },[])
    return (
        <div className='flex-1 bg-[#f6fdff] md:px-16 px-5 overflow-auto'>
            <Topbar title={'Profile'}/>

            {/* <div className=' flex md:h-1/2 bg-blue-400'>
                    <div className='bg-white md:p-10 p-5 shadow w-["100%"]'>
                        <p>Name : <span>sfsdfasfasdfsdf</span></p>
                        <p>Email : <span>sfsdfasfasdfsdf</span></p>
                        <p>Name : <span>sfsdfasfasdfsdf</span></p>
                        <p>Name : <span>sfsdfasfasdfsdf</span></p>
                        <p>Name : <span>sfsdfasfasdfsdf</span></p>
                        
                    </div>
            </div> */}
        </div>
      )
}

export default Profile
import React from 'react'
import {FcSms} from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Topbar({title,username}) {
  return (
    <div className='flex justify-between items-center sticky top-0 w-full bg-[#f6fdff] md:py-10 p-5 md:p-0'>
      <div>
          <p className='md:font-bold text-xl'>{title}</p>
      </div>
      <div className='inline-flex gap-2 items-center'>
        {/* <p>{username?.user?.firstname} {username?.user?.lastname}</p> */}
        <div className='w-7 h-7 rounded-md border flex justify-center items-center'><FcSms/></div>
        <Link to='/dashboard/accounts'>
        <div className='w-7 h-7 bg-slate-400 rounded-full border-white border-2 shadow-md'></div>
        </Link>
      </div>
    </div>
  )
}

export default Topbar
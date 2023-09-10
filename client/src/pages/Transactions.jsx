import React from 'react'
import Topbar from '../components/Topbar'
import Table from '../components/Table'


function Transactions() {
  return (
    <div className='flex-1 bg-[#f6fdff] md:px-16 px-5 overflow-auto'>
        <Topbar title={'Transactions'}/>

        <div className="shadow-lg bg-white p-5 rounded-md my-5">
        <p className="text-xl text-slate-400 pb-5">All transactions</p>
        <Table/>
      </div>
    </div>
  )
}

export default Transactions
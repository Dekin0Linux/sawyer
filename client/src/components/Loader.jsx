import React from 'react'
import { Loader as Spin} from 'rsuite';

function LoaderComp() {
  return (
    <div className='fixed bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg top-0 left-0 w-screen z-50 flex justify-center items-center h-screen'><Spin content="Loading" size="lg" vertical /></div>
  )
}

export default LoaderComp
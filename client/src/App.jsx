import React from 'react'
import 'rsuite/dist/rsuite.min.css';

import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements ,Navigate} from 'react-router-dom'
import Dashbaord from './pages/Dashbaord'
import Accounts from './pages/Accounts'
import Cards from './pages/Cards'
import Transactions from './pages/Transactions'
import Home from './pages/Home';
import Layout from './layout/Layout';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashbaord />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="card" element={<Cards />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App
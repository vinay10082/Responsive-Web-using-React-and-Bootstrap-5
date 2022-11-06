import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Users from './Pages/Users';

function AllRoutes  ()  {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/users' element={<Users />}/>
    </Routes>
  );
}

export default AllRoutes
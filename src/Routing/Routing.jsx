import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Component/Login'
import Dashboard from '../Component/Dashboard'
export default function Routing() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

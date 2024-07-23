import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Component/Login'
import Dashboard from '../Component/Dashboard'
export default function Routing() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Dashboard/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

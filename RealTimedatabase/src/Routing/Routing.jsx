import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from '../components/SignUp';
const Routing = () => {
  return (
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<SignUp/>}></Route>
     </Routes>
   </BrowserRouter>


  )
}

export default Routing

import { useState ,useContext} from "react";
import {StoreContext} from '../Context/Store';
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const{signupwithgoogle,baba,signinwithgoogle} = useContext(StoreContext);
    const[data,setdata] = useState({
        email:'',
        password:''
    })
    const handlechange = (e)=>{
        const{name,value} = e.target;
        setdata((prev)=>{
            return{...prev,[name]:value}
        })

   
    }
    const handleclick = (e)=>{
        const{email,password} =data;
        e.preventDefault();
        signupwithgoogle(email,password);

    }
    const signinhandle = async(e)=>{
        e.preventDefault();
        const{email,password} = data;
       let datas = await signinwithgoogle(email,password);
      if(datas){
         navigate('/dashboard');
      }
      else{
        navigate('/');
      }
      
    }
  return (
   <section>
   <div className="container">
   <div className="row justify-content-center mt-lg-5">
        <div className="col-lg-6">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={data.email} onChange={handlechange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name='password' value={data.password} onChange={handlechange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className='text-center'>
  <button onClick={handleclick} type="submit" className="btn btn-primary ps-5 pe-5">sign up</button>
  <button onClick={signinhandle} className="btn btn-primary"> sign in </button>
  <button  className='btn btn-primary ms-3'>login with google</button>
  </div>
</form>
        </div>
    </div>
   </div>
   </section>
  )
}

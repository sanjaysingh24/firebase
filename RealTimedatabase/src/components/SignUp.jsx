import React from 'react'
import { useState,useContext } from 'react'
import { StoreProvider } from '../Provider/Store'
const SignUp = () => {
const{createuser} = useContext(StoreProvider);

    const[data,setdata] = useState({
        email:'',
        password:''
    });
    const handlechange = (e)=>{
     e.preventDefault();
     const{name,value} = e.target;
     setdata((prev)=>{
        return {...prev,[name]:value}
     })
    
    }

const handlesignup = (e)=>{
    e.preventDefault();
    createuser(data);

}
  return (
     <section>

        <div className="container mt-5">
            <div className="row justify-content-center mt-5">
             <div className="col-lg-5 mt-5">
   <div className='main-box'>
   <form>
                <h4 className='text-center'>Sign up</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handlechange} value={data.email} name='email'/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlechange} value={data.password} name='password' autoComplete='true'/>
  </div>

  <div className='text-center'>
  <button  onClick={handlesignup} className="btn btn-primary w-50">Sign up</button>
  <hr />
  <div>
    <p className='text-center'>or</p>
  <button type="submit" className="btn btn-primary me-2">Signup with Mobile </button>
  <button type="submit" className="btn btn-primary me-2" >Signup with Google </button>
  <button type="submit" className="btn btn-primary">Sign with  Email</button>
  
  </div>
  </div>
</form>

   </div>
             </div>
            </div>
           
        </div>
     </section>
  )
}

export default SignUp

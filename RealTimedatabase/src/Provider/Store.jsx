import {createContext} from 'react';
import { app,auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const StoreProvider = createContext(null);



export const Store = (props)=>{
// create function for firebase authentication 
 
// sign up with email and password 

const createuser = async(data)=>{
    const{email,password} = data;
    let signup = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('sign up successfully',user);
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       console.log(errorCode);
    });

}


















    const baba = "sanju";
    const contextvalue = {baba,createuser};
    return(
        <>
        <StoreProvider.Provider value={contextvalue}>

            {props.children}
        </StoreProvider.Provider>
        </>
    )
}
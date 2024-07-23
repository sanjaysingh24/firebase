import { createContext, useEffect } from "react";
import { app } from "../config/firebase";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
export const StoreContext = createContext(null);

const auth = getAuth(app);



export const StoreProvider = (props)=>{

const signupwithgoogle = async(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}    
const signinwithgoogle = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      return true;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
      return false;
    }
  };
  const checkuser = async()=>{
    try{
        const checkuser = await onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
              console.log(uid);
            } else {
              // User is signed out
              // ...
            }
          });
    }catch(e){}

}
    useEffect(()=>{
        checkuser();
    },[])
  
    const baba = "sanju";
    const contextvalue = {baba,signupwithgoogle,signinwithgoogle};
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}

        </StoreContext.Provider>
    )

}
import { createContext, useEffect } from "react";
import { app,db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs } from "firebase/firestore";
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
const adddata = async()=>{
    let datas = await setDoc(doc(db, "Meals", Date.now().toString()), {
        name: "Breakfast",
       
      });
      console.log(datas);
      
}

const addcategory = async()=>{
    let category = await setDoc(doc(db, "Meals/1721755595419/Category",Date.now().toString()),{
        name:"Rayta"
    })
}

const addproducts = async()=>{
    let products = await setDoc(doc(db,"Meals/1721755595419/Category/1721756073442/Products",Date.now().toString()),{
        name:"Aalu pratha"
    })
}

const getdata = async()=>{
    const q = query(collection(db, "Meals"));
    const querySnapshot = await getDocs(q);
    const data =querySnapshot.docs.map((doc)=>({
        ...doc.data(),id:doc.id
    }))
    console.log(data);
    data.map(async(elem)=>{
        const workq = query(collection(db,`Meals/${elem.id}/Category`))
        const details = await getDocs(workq);
        const workinfo = details.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        }))

        console.log(workinfo);
    })
}







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
    const contextvalue = {baba,signupwithgoogle,signinwithgoogle,adddata,addcategory,addproducts,getdata };
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}

        </StoreContext.Provider>
    )

}
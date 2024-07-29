import {createContext} from 'react';

export const StoreProvider = createContext(null);

export const Store = (props)=>{
// create function for firebase authentication 
 



















    const baba = "sanju";
    const contextvalue = {baba};
    return(
        <>
        <StoreProvider.Provider value={contextvalue}>

            {props.children}
        </StoreProvider.Provider>
        </>
    )
}
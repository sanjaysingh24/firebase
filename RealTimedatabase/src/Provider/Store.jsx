import {createContext} from 'react';

export const StoreProvider = createContext(null);

export const Store = (props)=>{
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
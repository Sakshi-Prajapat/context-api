import React ,{createContext,useEffect,useState} from "react";

import {PostContextType,Idata} from "../types/postTypes"

export const AppContext = createContext<PostContextType | null>(null);

export const AppProvider : React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [data , setData] = useState([])

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>Response.json())
        .then(data=>{
            setData(data);
            console.log(data)
        })
    },[])
    console.log(data)
    return (
        <>
        <AppContext.Provider value={{data}}>
            {children}
        </AppContext.Provider>
        </>
    )
}
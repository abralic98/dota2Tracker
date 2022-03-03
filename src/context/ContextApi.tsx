
import React, {createContext, useState, useEffect, useRef} from "react"
import Axios from "axios";


export const ContextApi = createContext<any>({});

export const Storage = (props:any) =>{
    const server = "http://116.203.242.253:3003"
    const firstRender = useRef<boolean>(true);
    const [windowSize, setWindowSize] = useState<Object>({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(()=>{
        if(firstRender){
            firstRender.current=false;
        }else{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    },[])
    const context = {
        state:"kurac",
        displaySize:[windowSize,setWindowSize],
        Server:server
    }

    return (
        <ContextApi.Provider value = {context}>
        {props.children}
        </ContextApi.Provider>
    )
}
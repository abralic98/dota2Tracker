
import React, {createContext, useState, useEffect, useRef} from "react"
import Axios from "axios";


export const ContextApi = createContext<any>({});

export const Storage = (props:any) =>{
    const context = {
        state:"kurac"
    }

    return (
        <ContextApi.Provider value = {context}>
        {props.children}
        </ContextApi.Provider>
    )
}
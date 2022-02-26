import classes from "../styles/StartingPage.module.scss"
import {useState, useEffect, useContext} from "react";
import Axios from "axios";
import {ContextApi} from "../context/ContextApi"


const StartingPage = () =>{

    const kontekst = useContext(ContextApi);
    const aa = kontekst;
    console.log(aa);
    const account_id = "28277592"
    useEffect(()=>{
        Axios.get(`https://api.opendota.com/api/players/${account_id}/recentMatches`)
        .then((response)=>{
            console.log(response.data)
        })
    },[])
    return (
        <div className={classes.mainBlock}>
            
        </div>
    )
}

export default StartingPage;
import classes from "../styles/pagesStyle/StartingPage.module.scss"
import {useState, useEffect, useContext} from "react";
import Axios from "axios";
import {ContextApi} from "../context/ContextApi"
import NavBar from "../components/NavBar";
import video from "../videobacground/dota2.mp4"

const StartingPage = () =>{

    const {displaySize} = useContext(ContextApi);
    const [windowSize] = displaySize;
    console.log(windowSize.width)
    const account_id = "28277592"
    useEffect(()=>{
        /*Axios.get(`https://api.opendota.com/api/players/${account_id}/recentMatches`)
        .then((response)=>{
            console.log(response.data)
        })*/
    },[])
    return (
        <div className={classes.mainBlock}>
            <NavBar/>
            <video width={windowSize.width} height="auto" autoPlay loop muted>
                <source src={video}></source>
            </video>
            </div>
    )
}

export default StartingPage;
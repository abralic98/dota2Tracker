import {useState, useEffect, useContext} from "react";
import Axios from "axios";
import {ContextApi} from "../context/ContextApi"
interface type  {
    name: String
    kurac: number
}

const StartingPage = (props: type) =>{

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
        <div>
            <p>Cao {props.name} {props.kurac}</p>
        </div>
    )
}

export default StartingPage;
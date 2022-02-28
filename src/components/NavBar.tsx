import classes from "../styles/componentStyle/NavBar.module.scss"
import { useContext } from "react"
import { ContextApi } from "../context/ContextApi"
import { useNavigate } from 'react-router-dom';
import dotalogo from "../images/dota2logo.png";
import '../fonts/ReggaeOne-Regular.ttf';
const NavBar = () =>{
    const navigate = useNavigate();
    function redirect(i:number){
        if(i===0){
            navigate("/");
        }
        if(i===1){
            navigate("/register");
        }
        if(i===2){
            navigate("/login");
        }

    }
    return (
        <div className={classes.header}>
            <div className={classes.flex}>
                <img src={dotalogo} alt="" />
                <p onClick={()=>redirect(0)}>HOME</p>
                <p>ABOUT</p>
            </div>
            <div className={classes.accountBlock}>
                <button onClick={()=>redirect(1)}>Registration</button>
                <button onClick={()=>redirect(2)}>Login</button>
            </div>
        </div>
    )
}

export default NavBar;
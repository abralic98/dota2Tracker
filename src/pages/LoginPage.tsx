import classes from "../styles/pagesStyle/RegisterPage.module.scss";
import { useState, useContext, useEffect } from "react";
import logo from "../images/test.png"
import background from "../images/dotaback.jpg"
import { ContextApi } from "../context/ContextApi";
import Axios from "axios"
const LoginPage = () =>{
    Axios.defaults.withCredentials = true;
    const {Server} = useContext(ContextApi);
    const server = Server;
    const [userName, setUserName] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [isLoggedIn, setIsLoggedIn] = useState({
        username:"",
        email:"",
        password:"",
        steamID:""
    });

   
    function handleLogin(e:any){
        e.preventDefault();
        console.log({userName,password})
        Axios.get(`${server}/api/get/login`,{
            params:{
                username:userName,
                password:password
            }
        })
        .catch((err)=>{
            console.log({err})
        })
        .then((response)=>{
            console.log(response)
        })
    }

    return (
        <div className={classes.registerBlock}>
            <div className={classes.background}>
                <img src={background} alt="" />
            </div>
            <div className={classes.formBlock}>
                <form onSubmit={handleLogin} className={classes.login}action="">
                    <p className={classes.title}>Login</p>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Username</label>
                        <input onChange={(e)=>setUserName(e.currentTarget.value)} type="text" />
                    </div>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Password</label>
                        <input onChange={(e)=>setPassword(e.currentTarget.value)} type="password" />
                    </div>
                    <div className={classes.btnBlock}>
                        <button>Login</button>
                    </div>
                    <div className={classes.logoBlock}>
                        <img src={logo} alt="" />
                    </div>
                </form>
                {isLoggedIn ? <p style={{color:"red"}}>{isLoggedIn.username}</p> : null}
            </div>
        </div>
    )
}
export default LoginPage;
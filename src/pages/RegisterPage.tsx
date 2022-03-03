import classes from "../styles/pagesStyle/RegisterPage.module.scss";
import { useState, useContext} from "react";
import { ContextApi } from "../context/ContextApi";
import logo from "../images/test.png"
import background from "../images/dotaback.jpg"
import Axios from "axios";

const RegisterPage = () =>{
    const {Server} = useContext(ContextApi);
    const server = Server;
    const [userName, setUserName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [steamID, setSteamID] = useState<number>();
    const [checkBox, setCheckBox] = useState<boolean>(false);
    function handleRegister(e:any){
        e.preventDefault();
        console.log({userName,email,password,steamID})
        Axios.post(`${server}/api/post/register`,{
            username:userName,
            email:email,
            password:password,
            steamID:steamID
        })
        .then((response)=>{
            console.log(response);
        })
    }
    return (
        <div className={classes.registerBlock}>
            <div className={classes.background}>
                <img src={background} alt="" />
            </div>
            <div className={classes.formBlock}>
                <form onSubmit={handleRegister}action="">
                    <p className={classes.title}>Register</p>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Username</label>
                        <input onChange={(e)=>setUserName(e.currentTarget.value)} type="text" />
                    </div>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Email</label>
                        <input onChange={(e)=>setEmail(e.currentTarget.value)} type="email" />
                    </div>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Password</label>
                        <input onChange={(e)=>setPassword(e.currentTarget.value)} type="password" />
                    </div>
                    <div className={classes.inputBlock}>
                        <label htmlFor="">Steam32ID</label>
                        <input onChange={(e)=>setSteamID(e.currentTarget.valueAsNumber)} type="number" />
                    </div>
                    <div className={classes.checkbox}>
                        <input onChange={(e)=>setCheckBox(!checkBox)} type="checkbox" />
                        <div>
                            <p>I agree to</p>
                            <p className={classes.terms}>Terms</p>
                            <p>of Use</p>
                        </div>
                    </div>
                    <div className={classes.btnBlock}>
                        <button>Register</button>
                    </div>
                    <div className={classes.logoBlock}>
                        <img src={logo} alt="" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;
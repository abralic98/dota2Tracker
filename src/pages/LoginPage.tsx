import classes from "../styles/pagesStyle/RegisterPage.module.scss";
import { useState } from "react";
import logo from "../images/test.png"
import background from "../images/dotaback.jpg"
const LoginPage = () =>{
    const [userName, setUserName] = useState<any>();
    const [password, setPassword] = useState<any>();
    function handleLogin(e:any){
        e.preventDefault();
        console.log({userName,password})
    }
    return (
        <div className={classes.registerBlock}>
            <div className={classes.background}>
                <img src={background} alt="" />
            </div>
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
        </div>
    )
}
export default LoginPage;
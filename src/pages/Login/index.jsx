import React from "react";
import Loginform from "../../components/Loginform";
import './index.css'
function Login(props){
    return(
        <div className="Login">
            <div className="loginform">
                <Loginform></Loginform>
            </div>
        </div>
    )
}
export default Login;
import React, { useCallback, useState } from "react";
import './index.css'
import {useNavigate} from 'react-router-dom'
import debounce from "../../utils/debounce";
import { loginAsync,registerAsync } from "../../api/loginthing";
function Loginform(props){
    const navigate = useNavigate()
    let [username,setusername] = useState('')
    let [password,setpassword] = useState('')
    let usernameChange=useCallback(debounce((e)=>{
        setusername(e.target.value)
    },500),[])
    let passwordChange=useCallback(debounce((e)=>{
        setpassword(e.target.value)
    },500),[])
    let login=()=>{
        loginAsync(username,password).then((res)=>{
                console.log(res)
                window.sessionStorage.setItem('username',username);
                window.localStorage.setItem('token',res.data.data.token)
                window.localStorage.setItem('user_id',res.data.data.userId)
                window.sessionStorage.setItem('user_id',res.data.data.userId)
                alert('登录成功!!!');
                navigate('/main');
        }).catch((err)=>{
            console.log('登录失败，具体什么失败我也不知道')
        })
    }
    let register=()=>{
        registerAsync(username,password).then((res)=>{
            alert('注册成功,赶紧登陆吧!')
        }).catch((err)=>{
            console.log('注册失败，具体什么失败我也不知道')
        })
    }
    return(
        <div className="Loginform">
            <div className="formContent">
                <header><h1>实训博客系统</h1></header>
                <div className="forminput usernameBox">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" placeholder="请输入用户名" onChange={(e)=>usernameChange(e)}/>
                </div>
                <div className="forminput passwordBox">
                    <label for="password">密码:</label>
                    <input type="password" id="password" placeholder="请输入密码" onChange={(e)=>passwordChange(e)}/>
                </div>
                <div className="handle">
                    <button id="login" onClick={login}>登录</button>
                    <button id="register" onClick={register}>注册</button>
                </div>
            </div>
            
        </div>
    )
}
export default Loginform;

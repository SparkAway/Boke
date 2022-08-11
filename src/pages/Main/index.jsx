import React, { useContext, useState ,useEffect, useCallback } from "react";
import Header from "../../components/Header";
import './index.css'
import Viewcontent from "../../components/Viewcontent";
import Write from "../../components/Write";
import { getArticle } from "../../api/comment";
import Writeselector from "../../components/Writeselector";
function Main(props){
    let [list,setlist] = useState([]);
    let [show,setShow] = useState(false);
    let token = window.localStorage.getItem('token');
    useEffect(()=>{
        update();
    },[])
    let changeshow=useCallback(()=>{
        setShow(!show);
    },[show])
    let update = ()=>{
        getArticle(token).then((res)=>{
            console.log(res)
            //这样写是为了让memo缓存后数组对象改变后重新渲染
            setlist([...res.data.data]);
        })
    }
    return(
        <div className="MainPage">
            <input type="checkbox" id="maincheckbox"/>
            <div className="hat"></div>
            <div className="mainbox">
                <Header></Header>
                <Viewcontent list={list}></Viewcontent>
                <Write change={changeshow}></Write>
                <Writeselector show={show} change={changeshow} update={update}></Writeselector>
            </div>
            
        </div>
    )
}
export default Main;
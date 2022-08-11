import React, { useEffect, useState } from "react";
import './index.css'
import Publish from "../Publish";
import { list } from "../../api/detail";
function PublishPage(props){
    let token = window.localStorage.getItem('token')
    let userId = window.sessionStorage.getItem('user_id')
    let [publist,setpublist] = useState([]);
    useEffect(()=>{
        list(token,userId).then((res)=>{
            console.log('发布列表',res);
            setpublist(res.data.data)
        }).catch((err)=>{
            console.log('发布列表加载失败',err);
        })
    },[])
    return(
        <div className="publishpage">
            <h2>他发布的文章</h2>
            {
                publist.map((item)=>{
                    return (
                        <Publish title={item.title} brefdes={item.playUrl} favoriteCount={item.favoriteCount} commentCount={item.commentCount} videoId={item.id} name={item.author.name} coverUrl={item.coverUrl}></Publish>
                    )
                })
            }
        </div>
    )
}
export default PublishPage;
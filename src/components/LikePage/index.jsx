import './index'
import React, { useEffect, useState } from 'react'
import { favoritelist } from '../../api/detail';
import Like from '../Like';
function LikePage(props){
    let [likelist,setlikelist] = useState([])
    let token = window.localStorage.getItem('token')
    let userId = window.sessionStorage.getItem('user_id')
    useEffect(()=>{
        favoritelist(userId,token).then((res)=>{
            console.log('点赞列表请求成功',res)
            setlikelist(res.data.data);
        }).catch((err)=>{
            console.log('点赞列表请求失败',err)
        })
    },[])
    return(
        <div className='likepage'>
            <h2>他点赞的文章</h2>
            {
                likelist.map((item)=>{
                    return (
                        <Like title={item.title} brefdes={item.playUrl} favoriteCount={item.favoriteCount} commentCount={item.commentCount} videoId={item.id} name={item.author.name} coverUrl={item.coverUrl}></Like>
                    )
                })
            }
        </div>
    )
}
export default LikePage;
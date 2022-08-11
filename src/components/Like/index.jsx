import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
function Like(props){
    const {
        title,
        brefdes,
        favoriteCount,
        commentCount,
        videoId,
        name,
        coverUrl
    } = props;
    let navigate = useNavigate();
    function getDetails(){
        window.sessionStorage.setItem('name',name)
        window.sessionStorage.setItem('video_id',videoId)
        //↓是把文章详细内容存到了session里面，跳转到详情页后取出使用
        window.sessionStorage.setItem('content',coverUrl)
        setTimeout(() => {
            navigate("/detail");
        }, 200);
    }
    return(
        <li className="likeitem">
            <div className="front">
                <div className="title" onClick={getDetails}>{title.slice(0,10)}</div>
                <div className="brefdes">{brefdes.slice(0,10)}</div>
            </div>
            <div className="end">
                <div className="like">
                    <i></i>
                    <span>{favoriteCount}</span>
                </div>
                <div className="comment">
                    <i></i>
                    <span>{commentCount}</span>
                </div>
            </div>
        </li>
    )
}
export default Like;
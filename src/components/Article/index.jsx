import {useEffect, useRef, useState} from 'react';
import { action } from '../../api/comment';
import { useNavigate } from 'react-router-dom';
import './index.css';
function Article(props){
        const [id] = useState(props.article.author.id);
        const [videoId] = useState(props.article.id);
        const [name] = useState(props.article.author.name);
        const [title] = useState(props.article.title);
        const [brefcontent] = useState(props.article.playUrl);
        const [commentcount] = useState(props.article.commentCount);
        const [likecount,setlikecount] = useState(props.article.favoriteCount);
        const [coverUrl] = useState(props.article.coverUrl);
        const [isFavorite,setFavorite] = useState(props.article.favorite);
        const [like,setlike] = useState(isFavorite?2:1);
        const likeref = useRef();
        let navigate = useNavigate();

        useEffect(()=>{
            if(isFavorite){
                likeref.current.classList.add('likeactive')
            }else{
                likeref.current.classList.remove('likeactive')
            }
        },[isFavorite])
        let token = window.localStorage.getItem('token');
        function getDetails(){
            window.sessionStorage.setItem('name',name)
            window.sessionStorage.setItem('video_id',videoId)
            //↓是把文章详细内容存到了session里面，跳转到详情页后取出使用
            window.sessionStorage.setItem('content',coverUrl)
            setTimeout(() => {
                navigate("/detail");
            }, 200);
        }
        let likeaction=()=>{
            if(token){
                action(token,videoId,like).then((res)=>{
                    setlike(like===1?2:1);
                    setFavorite(!isFavorite);
                    if(like===1){
                        setlikecount(likecount+1);
                    }else{
                        setlikecount(likecount-1);
                    }
                }).catch((err)=>{
                    console.log('点赞失败',err)
                })
            }
        }
        let userpage = ()=>{
            window.sessionStorage.setItem('user_id',id)
            navigate('/userpage')
        }
        return(
            <div className="article">
                <div className="meta-container">
                    <div  className="meta">
                        <div className="username" onClick={userpage}>
                            {name}
                        </div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="content-main">
                        <div className="title">
                            <div  className="title-content" onClick={getDetails}>
                                {title}
                            </div>
                        </div>
                        <div className="abstract">
                            <div  className="abstract-content">
                                {brefcontent}
                            </div>
                        </div>
                        <ul className="action-list">
                            <li className="item like"onClick={likeaction}>
                                <i ref={likeref}></i>
                                <span>{likecount}</span>
                            </li>
                            <li className="item comment">
                                <i></i>
                                <span>{commentcount}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
export default Article;
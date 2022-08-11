import  { useState,useEffect, useRef } from "react";
import './index.css';
import Header from "../../components/Header";
import Comment from "../../components/Comment";
import { list } from "../../api/detail";
function Detials(){
        const [article_author_name,setArticle_author_name] = useState('');
        const [firstCommentList,setFirstCommentList] = useState([]);
        let contentref = useRef();
    useEffect(()=>{
        let ses = window.sessionStorage;
        let name = ses.getItem("name");
        let video_id = ses.getItem("video_id")
        let token = window.localStorage.getItem("token")
        let content = ses.getItem("content")
        contentref.current.innerHTML = content;
        setArticle_author_name(name);
        list(token,video_id).then((res)=>{
            if(res.status_code===0){
                setFirstCommentList(res.comment_list);
            }
        })
    },[])
        var commentlist = firstCommentList.map((item)=>{
            return <Comment key={item.comment_id} comment={item}/>
        })
        return(
            <div className="Detailspage">
                <Header/>
                <div className="articlebox">
                    <div className="authorbox">
                        <div className="author_info">
                            <div className="author_name">{article_author_name}</div>
                        </div>
                    </div>
                    <div className="articlecontent" ref={contentref}>
                        
                    </div>
                </div>
                
                <div className="commentcontent">
                    <div className="title">
                        <p>评论区</p>
                    </div>
                    <div className="upComent">
                        <h3>发布评论</h3>
                        <textarea name="coment" id="coment" cols="125" rows="10"></textarea>
                        <div className="buttondiv"><button>发布</button></div>
                    </div>
                    <div className="list">
                        {commentlist}
                    </div>
                </div>  
            </div>
        )
    
}
export default Detials;

import React, { useEffect, useState ,memo} from "react";
import './index.css'
import Article from "../Article";
function Viewcontent(props){
    let {list} = props;
    let newlist = [];
    if(list){
        newlist = list.map((article)=>{
            return(
                <Article key={article.id} article={article} ></Article>
            )
        })
    }
    
    return(
        <div className="Viewcontent">
            {
                console.log('viewcontent组件渲染')
            }
             <div className="main">
                <div className="view-content">
                    <div className='view-content'>
                        <div className="container">
                            <div className="leftcontent">
                                <div className="comment-list">
                                    <ul>
                                        {newlist}
                                    </ul>
                                </div>
                            </div>
                            <aside className="asidecontent">
                                <div className="sign-tip"></div>
                                <div className="download"></div>
                                <div className="userblock"></div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Viewcontent);
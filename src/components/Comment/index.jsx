import './index.css';
import { useEffect, useState } from 'react';
function Comment(props){
        const[username,setUsername] = useState(props.comment.user.name);
        const[firstcomment,setFirstcomment] = useState(props.comment.content);
        return(
            <div className="commentbox">
                <div className='usericon'><img alt="" /></div>
                <div className='commentmain'>
                    <div className='mainbox'>
                        <div className='userinfo'>{username}</div>
                        <div className='content'>{firstcomment}</div>
                    </div>
                </div>
            </div>
        )
}
export default Comment;
import React, { useEffect ,useState} from "react";
import Header from "../../components/Header";
import { getUserInfo } from "../../api/detail";
import { Outlet,useNavigate} from "react-router-dom";
import './index.css'
function Userpage(props){
    let [username,setusername] = useState('');
    let [favoritecount,setfavoritecount]=useState(0);
    let [followCount,setfollowCount] = useState(0);
    let [followerCount,setfollowerCount] = useState(0);
    let [follow,setfollow] = useState(false);
    let navigate = useNavigate();
    useEffect(()=>{
        let userId = window.sessionStorage.getItem('user_id');
        let token = window.localStorage.getItem('token');
        if(userId&&token){
            getUserInfo(userId,token).then((res)=>{
                console.log('请求用户信息成功',res);
                setusername(res.data.data.name.slice(2));
                setfavoritecount(res.data.data.favoriteCount);
                setfollowCount(res.data.data.followCount);
                setfollowerCount(res.data.data.followerCount);
                setfollow(res.data.data.follow);
            }).catch((err)=>{
                console.log('请求用户信息失败',err);
            })
        }
    },[])
    let toPublishpage=()=>{
        navigate('publishpage')
    }
    let toLikePage=()=>{
        navigate('likepage')
    }
    let toFocusPage=()=>{
        navigate('focuspage')
    }
    let toFansPage=()=>{
        navigate('fanspage')
    }
    return(
        <div className="userpage">
            <Header></Header>
            <div className="usercontent">
                <header>
                    <div className="iconbox">

                    </div>
                    <div className="headerbox">
                        <div className="top">
                                <h1>用户名:{username}</h1>
                        </div>
                        <div className="brefdescribe">这个人很懒什么都没写</div>
                        <ul className="bottom">
                            <li onClick={toLikePage}>点赞:{favoritecount}</li>
                            <li onClick={toFocusPage}>关注:{followCount}</li>
                            <li onClick={toFansPage}>粉丝:{followerCount}</li>
                            <li>是否关注:{follow}</li>
                            <li onClick={toPublishpage}>他的文章</li>
                        </ul>
                    </div>
                </header>
                <Outlet/>
            </div>
        </div>
    )
}
export default Userpage;
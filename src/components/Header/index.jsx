import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import './index.css';
function Header(){
        let username = window.sessionStorage.getItem('username');
        let navigate = useNavigate();
        let userpage = ()=>{
            navigate('/userpage')
        }
        let mainpage = ()=>{
            navigate('/main')
        }
        let outlogin =()=>{
            if(window.confirm('你确认退出登录吗')){
                window.sessionStorage.clear();
                window.localStorage.clear();
                navigate('/login')
            }
        }
        return(
            <div className="header">
                {console.log('header组件渲染了')}
                <div className="container">
                    <a className="logo" href="/">
                       <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.h128.com%2Fupload%2F201905%2F10%2F201905101255278626.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_1421%2Fquality%2Cq_100%2Fformat%2Cjpg&refer=http%3A%2F%2Fimages.h128.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661482051&t=8b48ed4970bd0dee1d8f859a8a8c1273" alt="稀土掘金" className="logoimg"/> 
                    </a>
                    <nav className="header-navigation">
                        <ul className="nav-list">
                           <li className="main-nav-list">
                               <ul>
                                    <li className="main-nav-item" onClick={mainpage}>首页</li>
                                    <li className="main-nav-item">论坛</li>
                                    <li className="main-nav-item">客服</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                    <li className="main-nav-item">功能</li>
                                   
                               </ul>
                           </li>
                            <ul className="aside-nav-list">
                                <li className="search">
                                    <ul className="search-list">
                                        <li className="search-list-item">
                                            <form className="searchform">
                                                <input type="search" placeholder="搜索文章"/>
                                                <div className="search-icon-container">
                                                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="搜索" className="search-icon"/>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                                <li className="login">
                                    <button className="login-button" onClick={userpage}>{username}</button>
                                </li>
                                <li className="outlogin">
                                    <button className="login-button" onClick={outlogin}>登出</button>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
export default memo(Header);
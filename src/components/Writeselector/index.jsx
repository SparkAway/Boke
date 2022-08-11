import React, { useState ,useCallback ,useRef} from "react";
import './index.css'
import classnames from "classnames";
import { upPage } from "../../api/comment";
import debounce from "../../utils/debounce";
function Writeselector(props){
    let {show,change,update} = props;
    let [title,settitle] = useState('');
    let [content,setcontent] = useState('');
    let contentref = useRef();
    let titleref = useRef();
    let uppage =()=>{
        if(window.confirm('你确认发布本篇文章了吗?')){
            let token = window.localStorage.getItem('token');
            if(token&&title&&content){
                upPage(content,token,title).then((res)=>{
                    console.log(res)
                    alert('发布成功!!')
                    clearinput()
                    closeAdd()
                    change()
                    update()
                }).catch((res)=>{
                    console.log(res)
                    alert('发布失败!!')
                })
            }else if(!token){
                alert('身份校验失败，请重新登录!')
            }else if(!title){
                alert('标题为空')
            }else if(!content){
                alert('内容为空')
            }
        }
        
    }
    let closeAdd = ()=>{
        let ele = document.getElementById('maincheckbox');
        if(ele.checked){
            ele.checked = false;
        }else{
            ele.checked = true;
        }
    }
    let clearinput=()=>{
        settitle('')
        setcontent('')
        contentref.current.value=''
        titleref.current.value=''
    }
    let titlechange = useCallback(debounce((e)=>{
        settitle(e.target.value)
    },500),[])
    let contentchange = useCallback(debounce((e)=>{
        setcontent(e.target.value)
    },500),[])
    return(
        <div className={classnames('write-selector',{hidden:!show})}>
            <header>
                <label for="maincheckbox" title="关闭编辑" onClick={change}><svg t="1659241959369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2252" width="25" height="25"><path d="M952.311261 921.328619 542.892591 510.919389 950.154131 102.671381c8.53028-8.55177 8.53028-22.416546 0-30.967292-8.532327-8.55177-22.360264-8.55177-30.892591 0l-407.262564 408.248008L104.737436 71.704089c-8.53028-8.55177-22.36231-8.55177-30.892591 0-8.529257 8.55177-8.529257 22.416546 0 30.967292l407.262564 408.248008L71.687716 921.328619c-8.529257 8.55177-8.529257 22.416546 0 30.967292 4.26514 4.27435 9.856485 6.41306 15.446807 6.41306 5.590322 0 11.181667-2.13871 15.446807-6.41306l409.41867-410.409231 409.41867 410.409231c4.266164 4.27435 9.855462 6.41306 15.446807 6.41306 5.591345 0 11.17962-2.13871 15.446807-6.41306C960.841541 943.745165 960.841541 929.879366 952.311261 921.328619z" p-id="2253"></path></svg></label>
            </header>
            <div className="content">
                <div className="titlebox">
                    <label for="title">文章标题:</label>
                    <input id="title" title="输入文章标题" onChange={(e)=>titlechange(e)} ref={titleref}/>
                </div>
                <div className="contentbox">
                    <label for="content">文章内容:</label>
                    <textarea maxLength={400} title="输入文章内容"  name="content" id="content" onChange={(e)=>contentchange(e) } ref={contentref}>

                    </textarea>
                </div>
            </div>
            <footer>
                <button onClick={uppage} title="发布文章">发布</button>
            </footer>
        </div>
    )
}
export default Writeselector;
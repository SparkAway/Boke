import {React,memo} from "react";
import './index.css'
function Write(props){
    let {change} = props
    return(
        <label for="maincheckbox" className="write" title="发布文章点我!!" onClick={change}>
            {console.log('写文章组件渲染!!!')}
        </label>
    )
}
export default memo(Write);
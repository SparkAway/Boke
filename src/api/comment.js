import axios from '../utils/request'
export function getArticle(token){
    return axios({
        url:'http://120.79.150.199:8080/douyin/feed?latest_time&&',
        method:'get',
        params:{
            token
        }
    })
}
export function action(token,video_id,action_type){
    return axios({
        url:'http://120.79.150.199:8080/douyin/favorite/action/',
        method:'post',
        params:{
            token,
            video_id,
            action_type
        }
    })
}

export function upPage(data,token,title){
    return axios({
        url:'http://120.79.150.199:8080/douyin/publish/action/',
        method:'post',
        params:{
            data,
            token,
            title
        }
    })
}
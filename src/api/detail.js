import axios from '../utils/request'
export function getUserInfo(user_id,token){
    return axios({
        url:'http://120.79.150.199:8080/douyin/user/',
        method:'get',
        params:{
            user_id,
            token
        }
    })
}
export function list(token,user_id){
    return axios({
        url:'http://120.79.150.199:8080/douyin/publish/list/',
        method:'get',
        params:{
            token,
            user_id
        }
    })
}
export function favoritelist(user_id,token){
    return axios({
        url:'http://120.79.150.199:8080/douyin/favorite/list/',
        method:'get',
        params:{
            user_id,
            token
        }
    })
}
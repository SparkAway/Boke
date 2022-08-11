import axios from '../utils/request'
import {REGISTER} from './unitconfig'
export function loginAsync(username,password){
    console.log('222')
    return axios({
        url:'http://120.79.150.199:8080/douyin/user/login/',
        method:'post',
        params:{
            username,
            password
        }
    })
}
export const registerAsync = (data)=>axios.post(REGISTER,data);

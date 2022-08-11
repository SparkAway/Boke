import { Navigate } from "react-router-dom";
function routeGard({children}){
    let token = window.localStorage.getItem('token');
    if(token){
        return <>{children}</>
    }else{
        return <Navigate to='/login' replace/>
    }
}
export default routeGard
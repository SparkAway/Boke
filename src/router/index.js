import Login from "../pages/Login";
import Main from "../pages/Main";
import {Navigate} from 'react-router'
import Detials from "../pages/Detials";
import Userpage from "../pages/Userpage";
import PublishPage from "../components/PublishPage";
import LikePage from "../components/LikePage";
import FocusPage from "../components/FocusPage";
import FansPage from "../components/FansPage";
import RouteGard from "../utils/routeGard";
const routes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/main',
        element:<RouteGard><Main/></RouteGard>
    },
    {
        path:'/detail',
        element:<RouteGard><Detials/></RouteGard>
    },
    {
        path:'/userpage',
        element:<RouteGard><Userpage/></RouteGard>,
        children:[
            {
                path:'publishpage',
                element:<RouteGard><PublishPage/></RouteGard>
            },
            {
                path:'likepage',
                element:<RouteGard><LikePage/></RouteGard>
            },
            {
                path:'focuspage',
                element:<RouteGard><FocusPage/></RouteGard>
            },
            {
                path:'fanspage',
                element:<RouteGard><FansPage/></RouteGard>
            }
        ]
    },
    {
        path:'*',
        element:<Navigate to="/login"/>
    }
]
export default routes;
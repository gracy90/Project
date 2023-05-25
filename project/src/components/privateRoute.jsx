import React, { useContext, useEffect } from "react";
import { Outlet,Navigate } from "react-router-dom";
import {UserContext} from "../context/userContext/userContext";

function PrivateRoute(){
    const {getLocalUser,setUser,user}=useContext(UserContext)
    // useEffect(()=>{
    //     getLocalUser();
    //    },[])
    return(user.length>0?<Outlet/>:<Navigate to={'/login'}/>)

}
export default PrivateRoute;
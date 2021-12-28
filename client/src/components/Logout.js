import React from "react";
import {  useDispatch} from "react-redux"
import { useEffect } from "react";
import {logoutCurrentUser} from "../redux/actions/userActions"

function Logout(){
    const dispatch = useDispatch()
    return (<div>
        {dispatch(logoutCurrentUser() ) }
        
        
            <p>You have been logged out</p>
        </div>) 





}

export default Logout



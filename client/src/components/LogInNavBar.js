
import React from 'react';
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'



function LogInNavBar() {
    const history = useHistory() 

    return (

<div className="navbar-login">
    <div className=" teamwork radius">TeamWork </div>

</div>
    );
}

export default LogInNavBar;

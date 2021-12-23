
import React from 'react';
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {createBrowserHistory} from "history"


function NavBar() {

    
    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }
    
    
    return (
        <div>
            <div>NavBar</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/challenge/add">Add a Challenge</Link>
            <Link to="/challenges">Challenges</Link>
            <Link to="/logout">Logout</Link>
            
      
        </div>
    );
}

export default NavBar;

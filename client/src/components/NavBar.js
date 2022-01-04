
import React from 'react';
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'



function NavBar() {
    const history = useHistory() 

    return (
        <div className="navbar a">
              
            <Link to="/about">About</Link>
            <Link to="/challenge/add">Add a Challenge</Link>
            <Link to="/challenges">Challenges</Link>
            
             <button onClick={() => history.push(`/logout`)} className="status"> Logout </button>


        </div>
    );
}

export default NavBar;

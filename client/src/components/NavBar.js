
import React from 'react';
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'



function NavBar() {
    const history = useHistory() 

    return (
        <div className="navbar">
              <div>    
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/challenge/add">Add a Challenge</Link>
            <Link to="/challenges">Challenges</Link>
            </div>
        
                 <button onClick={() => history.push(`/logout`)} className="status"> Logout </button>


        </div>
    );
}

export default NavBar;

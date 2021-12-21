
import { NavLink, Link} from "react-router-dom";
import {useSelector} from "react-redux";

function NavBar() {

    if
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/addchallenge">Add a Challenge</Link>
            <Link to="/challenges">Challenges</Link>
      
        </nav>
    );
}

export default NavBar;

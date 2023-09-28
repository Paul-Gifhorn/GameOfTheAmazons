import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {

    return(
        <div className="navbar_container">
           <nav>
                <p>Games of the Amazons</p>
                <br></br>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/settings"}>Settings</Link></li>
                <li><Link to={"/help"}>Help</Link></li>
                <li><Link to={"/games"}>Games</Link></li>
                <li><Link to={"/about"}>Link</Link></li>
            </ul>
           </nav>
        </div>
    );
}

export default Navbar;
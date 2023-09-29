// Import Components
import React from "react";
import { Link } from 'react-router-dom';

// for the Language
import { language } from "./Context";
import { useContext } from "react";
function Navbar() {
    let {selectedLanguage, setLanguage} = useContext(language)

    return(
        <div className="navbar_container">
           <nav>
                <p>Games of the Amazons</p>
                <br></br>
            <ul>
                <li><Link to={"/home"}>{selectedLanguage === 'en' ? (<>Home</>):(<>Eingang</>) }</Link></li>
                <li><Link to={"/settings"}>{selectedLanguage === 'en' ? (<>Settings</>):(<>Einstellungen</>) }</Link></li>
                <li><Link to={"/help"}>{selectedLanguage === 'en' ? (<>Help</>):(<>Hilfe</>) }</Link></li>
                <li><Link to={"/games"}>{selectedLanguage === 'en' ? (<>Games</>):(<>Spiele</>) }</Link></li>
                <li><Link to={"/about"}>{selectedLanguage === 'en' ? (<>About</>):(<>Über uns</>) }</Link></li>
            </ul>
           </nav>
        </div>
    );
}

export default Navbar;
// Import Components 
import React from "react";
import Navbar from "../components/Navbar";

//language Setting
import { useContext } from "react";
import {lang, language } from "../components/Context";

function About(){

    let {selectedLanguage, setLanguage} = useContext(language)

    return(
        <div>
            <Navbar></Navbar>
            <div className="content">
                {selectedLanguage === 'de' ? (<> 
                
                <h1>Game of the Amazons</h1>
                <br></br>
                <p>Das Projekt "Game of the Amazons" wurde im Rahmen eines Hochschulprojekts der Hochschule Anhalt unter der Aufsicht von Herrn Toni Barth entwickelt.</p>
                </>)
                :
                (<>
                
                <h1>Game of the Amazons</h1>
                <br></br>
                <p>The project "Game of the Amazons" was developed as part of a university project at Anhalt University under the supervision of Mr. Toni Barth.</p></>)}
               
            </div>
            
        </div>
    );
}

export default About;
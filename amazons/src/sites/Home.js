// Import of the Components 
import React from "react";
import Navbar from "../components/Navbar";

//language Setting
import { useContext } from "react";
import {lang, language } from "../components/Context";

function Home(){

    let {selectedLanguage, setLanguage} = useContext(language)

    return(
        <div>
            <Navbar></Navbar>
            {/* Content in the class is always on the right site */}
            <div className="content">
                {selectedLanguage === 'de' ? (
                    <>
                    <h1>Willkommen bei Game of the Amazons</h1>
            
                    <p>Tauche ein in die faszinierende Welt der Amazonen und erlebe spannende Abenteuer in unserem Spiel.</p><br></br>
                    
                    <p>In "Game of the Amazons" trittst du gegen andere Spieler an, um die Vorherrschaft im Amazonenreich zu erlangen.</p><br></br>
                    
                    <p>Bist du bereit? Dann lass uns beginnen!</p>
                    </>
                )
                :
                (
                    <>
                    <h1>Welcome to Game of the Amazons</h1>

                    <p>Dive into the fascinating world of the Amazons and experience thrilling adventures in our game.</p><br></br>

                    <p>In "Game of the Amazons," you compete against other players to gain dominance in the Amazon realm.</p><br></br>

                    <p>Are you ready? Let's get started!</p>
                    </>
                )
            
            
            }
                
            </div>
        </div>
    );
}

export default Home;
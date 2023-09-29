// Imports Components 
import React from 'react';
import Navbar from "../components/Navbar";

//language Setting
import { useContext } from "react";
import {lang, language } from "../components/Context";


function Help() {

    let {selectedLanguage, setLanguage} = useContext(language)

    return (
        <div>
            <Navbar></Navbar>
            {/* rule set and Informations */}
            <div className='content'>

            {selectedLanguage === 'de' ? (<>

            <h1>Vor dem Start des Spiels</h1>
            <br></br>
            <p>ist es wichtig, einen Spieler auszuwählen oder gegebenenfalls einen neuen Spieler zu erstellen:</p>
            <br></br>

            <ul>
                <li>Spieler ziehen abwechselnd, wobei Weiß den ersten Zug hat.</li>
                <li>Jeder Spieler kann auswählen, ob er als Weiß oder Schwarz spielen möchte.</li>
                <li>Falls gewünscht, kann ein neuer Spieler erstellt werden.</li>
                <li>Die Spielerauswahl erfolgt vor dem ersten Zug.</li>
            </ul>
            <br></br>



            <h1>Regeln für Game of the Amazons</h1>
            <br></br>
            <ul>
                <li>Spieler ziehen abwechselnd, Weiß beginnt.</li>
                <li>Jeder Zug besteht aus zwei Teilen:</li>
                <br></br>
                <ul>
                    <li>Erstens wird eine eigene Amazone auf ein leeres benachbartes Feld oder über mehrere leere Felder in orthogonaler oder diagonaler Richtung gezogen.</li>
                    <li>Die Amazone darf kein Feld überqueren oder betreten, das bereits von einer eigenen oder gegnerischen Amazone oder einem Pfeil (Blockadestein) besetzt ist.</li>
                    <li>Die Bewegung ist ähnlich wie die einer Dame beim Schach.</li>
                    <li>Die Amazone verschießt dann einen "giftigen" Pfeil (Blockadestein) vom Endpunkt ihres Zuges aus.</li>
                    <li>Der Pfeil kann in jede orthogonale oder diagonale Richtung beliebig weit fliegen.</li>
                    <li>Er darf auch rückwärts in Richtung des Feldes geschossen werden, von dem aus die Amazone gerade gezogen hat.</li>
                    <li>Ein Pfeil darf kein Feld überqueren oder auf einem Feld landen, wo sich bereits ein anderer Pfeil oder eine Amazone befindet.</li>
                </ul>
                <br></br>
                <li>Es besteht Zugpflicht: Der Spieler am Zug muss stets eine Amazone ziehen und einen Pfeil verschießen.</li>
                <li>Verloren hat der Spieler, der als Erster nicht mehr ziehen kann.</li>

            </ul>
            
            </>)
            :
            (<>

            <h1>Before Starting the Game</h1>
            <br></br>
            <p>It is important to select a player or, if necessary, create a new player:</p>
            <br></br>

            <ul>
                <li>Players take turns, with White making the first move.</li>
                <li>Each player can choose to play as White or Black.</li>
                <li>If desired, a new player can be created.</li>
                <li>Player selection takes place before the first move.</li>
            </ul>
            <br></br>

            <h1>Rules for Game of the Amazons</h1>
            <br></br>
            <ul>
                <li>Players take turns, with White starting.</li>
                <li>Each move consists of two parts:</li>
                <br></br>
                <ul>
                    <li>First, move one of your own Amazons to an empty adjacent square or over several empty squares in orthogonal or diagonal directions.</li>
                    <li>The Amazon cannot cross or enter a square already occupied by your own or an opponent's Amazon or an arrow (blocking stone).</li>
                    <li>The movement is similar to that of a queen in chess.</li>
                    <li>Then, the Amazon shoots a "poison" arrow (blocking stone) from the endpoint of its move.</li>
                    <li>The arrow can fly any number of squares in orthogonal or diagonal directions.</li>
                    <li>It can also be shot backward towards the square from which the Amazon just moved.</li>
                    <li>An arrow cannot cross a square or land on a square already occupied by another arrow or Amazon.</li>
                </ul>
                <br></br>
                <li>There is a mandatory move: The player whose turn it is must always move one Amazon and shoot one arrow.</li>
                <li>The player who can no longer make a move loses the game.</li>
            </ul>
            
            </>)}
           


            

            </div>
        </div>
    );
}

export default Help;
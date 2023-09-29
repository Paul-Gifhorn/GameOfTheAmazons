//Import Components
import React, {useContext} from "react";

// Import Variables
import { PlayerName, player_context } from './Context';
import {PlayerID, player_id} from './Context';
import {lang, language } from "../components/Context";

// Import Scripts
import { addBoard } from "../Scripts/board";
import { getPlayers } from "../Scripts/player";

function Launcher(){

    // Variables
    let {selectedLanguage, setLanguage} = useContext(language)
    let {player_name, setPlayer_name} = useContext(player_context);
    let {player_nr, setPlayerID} = useContext(player_id);

    return(
        <div className="content">
            
            <p>{player_name === 'none' ? (
            <>
                {selectedLanguage === 'en' ? (<>You should select a Player first</>):(<>Du solltest zuerst einen Spieler auswählen</>)}
            </>)
            :
            (<>
                {selectedLanguage ==='en' ?(<>Hello {player_name} have fun</>):(<>Hallo {player_name} viel Spaß</>)}
            </>)}
            </p>
            <br></br>

            <select id="opponents"></select><button onClick={Player_Select}>{selectedLanguage === 'en' ? (<>Load Opponents</>):(<>Lade Gegener</>)}</button>
            <br></br>
            <button onClick={battle}>{selectedLanguage ==='en' ? (<>Battle</>):(<>Los</>)}</button>
            <br></br>
            <b></b>
        </div>

    );

    // starts a new battle against the chosen Opponent
    async function battle(){
        let opponents = document.getElementById("opponents")
        let opponent_id = parseInt(opponents[opponents.selectedIndex].value);
        //console.log(player_nr,opponent_id)
        await addBoard(player_nr, opponent_id)
    }

}

// Searching at the Server for Opponents
async function Player_Select(){

    try{  
        var data = await getPlayers()
        //console.log(data)

    }
    catch(error){
    };

    //console.log(data.players[0]);
    for(const p in data.players){
        let o =  document.createElement("option")
        o.value = data.players[p].id
        o.text = data.players[p].name
        //console.log(p)
        document.getElementById("opponents").append(o)
    }
    
}



export default Launcher;
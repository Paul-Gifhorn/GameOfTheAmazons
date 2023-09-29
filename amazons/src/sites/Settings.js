// Import of the Components
import React, { useContext } from "react";
import Navbar from "../components/Navbar";

// Import of the Functions
import { getPlayers, addPlayer, deletePlayer, reset} from "../Scripts/player";


//Import of the Variables 
import { PlayerName, player_context } from '../components/Context';
import {PlayerID, player_id} from '../components/Context';
import {lang, language } from "../components/Context";

// Component
function Settings() {

    // Loads Global Settings for Player Name and ID 
    let {player_name, setPlayer_name} = useContext(player_context);
    let {player_nr, setPlayerID} = useContext(player_id);
    let {selectedLanguage, setLanguage} = useContext(language)

    // Variable for language 


    return(
        <div>
            <Navbar></Navbar>
            <div className="content">
                <h1>{selectedLanguage ==='en' ? (<>Settings</>):(<>Einstellungen</>)}</h1>
                <br></br> 
                {/* Gets Name of a net Player and upload it to API */}
                <input  id="player_input"></input>    
                <button onClick={() => addPlayer(document.getElementById("player_input").value)}>save</button><br></br>

               <p>{player_name}</p>

                {/* Push the button to load the available Players from the API */}
                <button onClick={Player_Select}>Select</button>
                <select id ="s">
                </select>
                {/* After using the Button the global Player name and id will be the 
                    selected Option its important to start and get the games */}
                <button onClick={() => updatePlayer()}>Use Option</button>
                
                <button color="red" onClick={() => deletePlayer(player_nr)}>Delete</button>
                <button onClick={reset}>Reset</button>
                <br></br><br></br>

                {/* Controlls the Language Setting on Site*/}
                <button onClick={() => toGerman(setLanguage)}>{selectedLanguage ==='de' ? (<>Deutsch</>):(<>German</>)}</button>
                <button onClick={() => toEnglish(setLanguage)}>{selectedLanguage ==='en' ? (<>English</>):(<>Englisch</>)}</button>
                <br></br>
                <br></br>
                <p>{selectedLanguage ==='en' ? (<>Current Setting English</>):(<>Akutelle Einstellung Deutsch</>)}</p>
            

            
            </div>
        </div>
    );

    // Sets Name and ID
    function updatePlayer(){
    
        let option = document.getElementById("s")
        option = option[option.selectedIndex];
    
        setPlayerID(option.value)
        console.log(option.value)
        setPlayer_name(option.innerHTML)
        console.log(option.innerHTML)
    }

}

async function Player_Select(){
  
    try{  
        var data = await getPlayers()
        console.log(data)

    }
    catch(error){
    };

    for(const p in data.players){
        let o =  document.createElement("option")
        o.value = data.players[p].id
        o.text = data.players[p].name
        console.log(p)
        // Adds the recived Players to the Selection
        document.getElementById("s").append(o)
    }
    
}

//------------------------------
        // For Languages

function toGerman(setLanguage){
    
    setLanguage('de')
}
function toEnglish(setLanguage){
    
    setLanguage('en')
}

//------------------------------

export default Settings;
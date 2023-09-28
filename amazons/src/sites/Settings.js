import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { getPlayers, addPlayer, deletePlayer, reset} from "../Scripts/player";

import { PlayerName, player_context } from '../components/Context';
import {PlayerID, player_id} from '../components/Context';





function Settings() {

    let {player_name, setPlayer_name} = useContext(player_context);
    let {player_nr, setPlayerID} = useContext(player_id);

    return(
        <div>
            <Navbar></Navbar>
            <div className="content">
                <h1>Player Settings</h1><br></br>

                <input  id="player_input"></input>    
                <button onClick={() => addPlayer(document.getElementById("player_input").value)}>save</button><br></br>

               <p>{player_name}</p>

                <button onClick={Player_Select}>Select</button>
                <select id ="s">
                </select>
                <button onClick={() => updatePlayer()}>Use Option</button>
                <button color="red" onClick={() => deletePlayer(player_nr)}>Delete</button>
                <button onClick={reset}>Reset</button>
            

            
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

    //console.log(data.players[0]);
    for(const p in data.players){
        let o =  document.createElement("option")
        o.value = data.players[p].id
        o.text = data.players[p].name
        console.log(p)
        document.getElementById("s").append(o)
    }
    
}

export default Settings;

import React, {useContext} from "react";

import { PlayerName, player_context } from './Context';
import {PlayerID, player_id} from './Context';

import { addBoard } from "../Scripts/board";
import { getPlayers } from "../Scripts/player";

function Launcher(){

    let {player_name, setPlayer_name} = useContext(player_context);
    let {player_nr, setPlayerID} = useContext(player_id);

    return(
        <div className="content">
            <script></script>
            <p>Hello {player_name} who should be your Opponent ? </p><br></br>
            <select id="opponents"></select><button onClick={Player_Select}>Load Opponents</button>
            <br></br>
            <button onClick={battle}>Battle</button>
            <br></br>
            <b></b>
        </div>

    );

    async function battle(){
        let opponents = document.getElementById("opponents")
        let opponent_id = parseInt(opponents[opponents.selectedIndex].value);
        console.log(player_nr,opponent_id)
        await addBoard(player_nr, opponent_id)
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
        document.getElementById("opponents").append(o)
    }
    
}



export default Launcher;
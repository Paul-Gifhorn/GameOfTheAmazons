import React, {useState, useEffect, useContext} from "react";


import { PlayerName, player_context } from './Context';
import {PlayerID, player_id} from './Context';

import { getGameStatus } from "../Scripts/board";
import { BoardBuilder2 } from "../Scripts/game";

 function Match(props){

    const [response, setResponse] = useState(null);


    // Game should be updated automaticly but shouldn't 
    // make to much traffic 
    useEffect(() => {
        const fetchData = async () => {
        try {
        const data = await getGameStatus(props.game_id);
        setResponse(data);
        console.log(data); 
    }catch (error) {
        console.error('Error fetching game status:', error);
    }
};

fetchData();
    const timer = setInterval(fetchData, 5000); 

    return () => {
    clearInterval(timer);
    };
}, []);

    let {player_name, setPlayer_name} = useContext(player_context);
    let {player_nr, setPlayerID} = useContext(player_id);

    return(
        <div className="content">
            <BoardBuilder2 response={response} player_id={player_nr}></BoardBuilder2>
        </div>
    )
}

export default Match;
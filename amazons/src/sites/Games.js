import React, { useState, useEffect } from 'react'; // four states
import Navbar from "../components/Navbar";

import { PlayerName, player_context } from '../components/Context';
import {PlayerID, player_id} from '../components/Context';
import {getGameStatus ,getGames} from '../Scripts/board';
import Launcher from '../components/battleLauncher';
import Match from '../components/Match';

async function getAllGames(id){
  var data = await getGames()
  var myGames = []

  for(let i =0; i< data.games.length;i++){
    
    if( data.games[i].players[0].id == id || data.games[i].players[1].id == id){
      myGames.push(i)
      
    }
  }
  console.log(myGames)
}


function Games() {

    
  
    const [player_name, setPlayer_name] = useState("none");
    const [player_nr, setPlayerID] = useState(0);
    const [response, setResponse] = useState(null);

    var GameList = getAllGames(player_nr)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getGameStatus(player_nr);
            setResponse(data);
            console.log(data); 
          } catch (error) {
            console.error('Error fetching game status:', error);
          }
        };
      
        fetchData();
        const timer = setInterval(fetchData, 5000); 
      
        return () => {
          clearInterval(timer);
        };
      }, []);

    const Games = <div></div>
    for(let c = 0; c < GameList.length ; c++){
      Games.push(<Match game_id={c}></Match>)
    }
    
    return (
        
        <div>
            <Navbar></Navbar>
            <Launcher></Launcher>
            <Match game_id={0}></Match>
        </div>
    );


}




export default Games;
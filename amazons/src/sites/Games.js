import Navbar from "../components/Navbar";
import Launcher from '../components/battleLauncher';
import Match from '../components/Match';
import { getGameStatus, getGames } from '../Scripts/board';
import React, { useState, useEffect } from 'react';

// Selects each game with the id of the Player
async function getAllGames(id) {
  var data = await getGames();
  // stores the games
  var myGames = [];

  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].players[0].id == id || data.games[i].players[1].id == id) {
      myGames.push(i);
    }
  }
  console.log("Spiele Anzahl", myGames.length);
  return myGames; // Return the list of games
}

function Games() {
  // Variables
  const [player_name, setPlayer_name] = useState("none");
  const [player_nr, setPlayerID] = useState(0);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGameStatus(player_nr);
        setResponse(data);
        //console.log(data); 
      } catch (error) {
        console.error('Error fetching game status:', error);
      }
    };

    fetchData();
    const timer = setInterval(fetchData, 5000); // Ddos Protection

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Fetch GameList using async function
  useEffect(() => {
    async function fetchGameList() {
      const games = await getAllGames(player_nr);
      setGameList(games);
    }

    fetchGameList();
  }, [player_nr]);

  // State for storing the list of games
  const [GameList, setGameList] = useState([]);

  // Render each Game
  const renderedGames = GameList.map((gameId, index) => (
    <div key={index}>
      <Match game_id={gameId}></Match>
    </div>
  ));

  return (
    <div>
      <Navbar></Navbar>
      <Launcher></Launcher>
      {renderedGames}
    </div>
  );
}

export default Games;
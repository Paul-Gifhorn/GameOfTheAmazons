import React ,{useState} from 'react';
import './App.css';
import './Amazon.css';

// everything about Navigation
import {  BrowserRouter,  Routes,  Route, Form} from "react-router-dom";
import Navbar from './components/Navbar';

// each available site
import Home from './sites/Home';
import About from './sites/About';
import Games from './sites/Games';
import Settings from './sites/Settings';
import Help from './sites/Help';

// "GLOBAL" Variables
import { PlayerName, player_context } from './components/Context';
import {PlayerID, player_id} from './components/Context';


function App() {

  const [player_name, setPlayer_name] = useState("none");
  const [player_nr, setPlayerID] = useState(0);


  return (
  <player_id.Provider value={{player_nr, setPlayerID}}>
    <player_context.Provider value={{player_name, setPlayer_name}}>
      <BrowserRouter basename='/GameOfTheAmazons'>
          <Routes>
            <Route path="/" element={<Navbar></Navbar>}/>
              <Route index element={<Home />} />
              <Route path="/about" element={<About></About>} />
              <Route path='home' element={<Home></Home>} />
              <Route path='/settings' element={<Settings></Settings>} />
              <Route path='/games' element={<Games></Games>} />
              <Route path='/help' element={<Help></Help>} />
          </Routes> 
      </BrowserRouter>   
    </player_context.Provider>
    </player_id.Provider>  
  );
}

export default App;

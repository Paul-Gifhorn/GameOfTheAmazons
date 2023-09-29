import './Amazon.css';

// everything about Navigation
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import Navbar from './components/Navbar';

// Import Main Components
import Home from './sites/Home';
import About from './sites/About';
import Games from './sites/Games';
import Settings from './sites/Settings';
import Help from './sites/Help';

// "GLOBAL" Variables
import {player_context } from './components/Context';
import {player_id} from './components/Context';
import {language} from './components/Context';

import React ,{useState} from 'react';

function App() {

  // will be used to set Player name and Id on the whole site
  const [player_name, setPlayer_name] = useState("none");
  const [player_nr, setPlayerID] = useState(0);
  const [selectedLanguage, setLanguage] = useState('en');


  return (
    // For Navigationbar and the current site
    // provider set the used variable for the component inside 
<language.Provider value={{selectedLanguage, setLanguage}}>
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
</language.Provider>
  );
}

export default App;

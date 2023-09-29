// Pictures
import b_amazon from "../icons/amazon_black.png"
import w_amazon from "../icons/amazon_white.png"
import arrow from "../icons/arrow.png"

// Variables
import React, { useState } from 'react';

// Scripts
import { move } from "./move";

// --------------------------------------
// Outdatet
// --------------------------------------
export function BoardBuilder() {
    const x = 10;
    const tableRows = [];
  
    for (let i = 0; i < x; i++) {
      const rowCells = [];
  
      for (let j = 0; j < x; j++) {
        if ((j+i)%2===0){
            rowCells.push(
                <td style={{ backgroundColor: 'black', color: 'white' }}>
                M
                </td>
              );
        }
        else{
        rowCells.push(<td></td>);
      }
    }
  
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }
  
    return <table>{tableRows}</table>;
  }


  // Creates a Whole Board inclusive Function for Moving

  export function BoardBuilder2(props) {

    // Stores the 3 Move Postions
    const [move_array, setMove_array] = useState([]);
    
    try{
    const response = props.response.board; // Response is the State of the board
    //console.log(props);

    // declares Variables of the response 
    const squares = response.squares;
    const rows = response.rows;
    //console.log(rows);
    const column = response.columns;
    //console.log(column);
  
    const tableRows = [];
    
    // Coordinates for each field (counter)
    var x = 0;
    var y = 0;
  
    // Loop to create the board
    for (let i = 0; i < rows; i++) {
      const rowCells = [];
      
      for (let j = 0; j < column; j++) {
          // multiple if statements to determine the picture 

          if(squares[i][j] === 0){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="queen"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={w_amazon} x={x} y={y}></img>
              </button>
            );
          }

          if(squares[i][j] === 1){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="queen"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={b_amazon} x={x} y={y}></img>
              </button>
            );
           }

          if(squares[i][j] === -2){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="arrow"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={arrow} x={x} y={y}></img>
              </button>
            );
          }

          if(squares[i][j] === -1){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="empty"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img x={x} y={y} className="empty" ></img>
              </button>
            );
          }        
      x=x+1
    }
      y=y+1;
      x=0;
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }

    //console.log(props.response.turnPlayer)
  
    return <div className="Game">
      {/*tells the player who has the turn */}
      <p>{parseInt(props.response.turnPlayer) === props.player_id ? "Your turn" : "Wait for Opponent"}</p>

      <table>{tableRows}</table>
    <br></br>
    <button onClick={go}>Go</button>
    </div>;
  }
  catch{
    return null;
  }

  function help_move(event){

    let newMoveArray = move_array
    // stores each value
    newMoveArray.push(parseInt(event.target.getAttribute('y')))
    newMoveArray.push(parseInt(event.target.getAttribute('x')))
    //console.log(newMoveArray)
    setMove_array(newMoveArray)
    console.log(event.target.getAttribute(x))
    console.log(event.target.getAttribute(y))
    console.log(move_array)
    
    }

  // makes the move 
  function go (){
    try {
      move(props.player_id,props.response.id,move_array[0],move_array[1],move_array[2],move_array[3],move_array[4],move_array[5])
      setMove_array([])
    } catch (error) {
      console.log(error)
    }
  
  }
  }




import b_amazon from "../icons/amazon_black.png"
import w_amazon from "../icons/amazon_white.png"
import arrow from "../icons/arrow.png"
import { getGameStatus } from "./board";
import { move } from "./move";
import React, { useState } from 'react';

export function BoardBuilder() {
    const x = 10;
  
    
    const tableRows = [];
  
    for (let i = 0; i < x; i++) {
      const rowCells = [];
  
      for (let j = 0; j < x; j++) {
        if ((j+i)%2==0){
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


  export function BoardBuilder2(props) {

    const [move_array, setMove_array] = useState([]);
    
    try{

     

  
    const response = props.response.board;
    console.log(props);

    const squares = response.squares;
    const rows = response.rows;
    console.log(rows);
    const column = response.columns;
    console.log(column);
  
    const tableRows = [];
    
    var x = 0;
    var y = 0;
  
    for (let i = 0; i < rows; i++) {
      const rowCells = [];
      
      for (let j = 0; j < column; j++) {

          if(squares[i][j] == 1){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="queen"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={w_amazon} x={x} y={y}></img>
              </button>
            );
          }

          if(squares[i][j] == 0){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="queen"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={b_amazon} x={x} y={y}></img>
              </button>
            );
           }

          if(squares[i][j] == -2){
            rowCells.push(
              <button onClick={help_move} x={x} y={y} className="figure" type="arrow"  style={{ backgroundColor: 'gray', color: 'white' }}>
                 <img src={arrow} x={x} y={y}></img>
              </button>
            );
          }

          if(squares[i][j] == -1){
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

    
    
    
    console.log(props.response.turnPlayer)
  
    return <div className="Game">
      <p>{parseInt(props.response.turnPlayer) == props.player_id ? "Your turn" : "Wait for Opponent"}</p>

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
    

    newMoveArray.push(parseInt(event.target.getAttribute('x')))
    newMoveArray.push(parseInt(event.target.getAttribute('y')))
    console.log(newMoveArray)
    setMove_array(newMoveArray)
    console.log(event.target.getAttribute(x))
    console.log(event.target.getAttribute(y))
    
    }

  function go (){
    try {
      move(props.player_id,0,move_array[0],move_array[1],move_array[2],move_array[3],move_array[4],move_array[5])
    } catch (error) {
      console.log(error)
    }
  
  }
  }




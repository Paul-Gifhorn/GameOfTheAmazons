// a move needs a Player a Game and 3 Positions 
// the values get used in the move data
export function move(player,game,row,col,erow,ecol,srow,scol){
    const url = 'https://gruppe3.toni-barth.com/move/'+player+"/"+game;

    const move_data = {
        "move": {
            "start": {
                "row": parseInt(row), 
                "column": parseInt(col),
            },
            "end": {
                "row": parseInt(erow), 
                "column": parseInt(ecol),
            }
        },
        "shot": {
            "row": parseInt(srow),
            "column": parseInt(scol),
        }
    }
    //console.log(move_data);

    // move data get Posted on the API-Server
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(move_data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
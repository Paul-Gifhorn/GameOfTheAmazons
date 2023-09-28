

export function addBoard(x,y){
    const url = 'https://gruppe3.toni-barth.com/games/';

    // Data for the board
    const data = {    
            "maxTurnTime": 600000, // eine Minute
            "players": [
                x,
                y
            ],
            "board": {
                "gameSizeRows": 10, // Zeilen des Spielbrettes
                "gameSizeColumns": 10, // Spalten des Spielbrettes
                "squares": [ // Liste von Zeilen des Spielbrettes (von 0 bis gameSizeRows - 1)
                    // folgende Integer-Werte sind in diesen Arrays erlaubt:
                    // 0: Amazone des Spielers mit Index 0 in players
                    // 1: Amazone des Spielers mit Index 1 in players
                    // -1: leeres Feld
                    // -2: Giftpfeil
                    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
                    [0, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                    [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
                    [1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
                ]
            }
        }
        
    ;

    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
export function getGames() {
    const url = 'https://gruppe3.toni-barth.com/games/';
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error retrieving player');
        }
        //console.log(response.json())
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error; 
      });
  }

  export function getGame(id) {
    const url = `https://gruppe3.toni-barth.com/games/${id}`;
  
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error retrieving Game');
      }
      return response.json();
    })
    .then(data => {
      console.log('Game retrieved:', data);
      return data; 
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; 
    });
}

export async function getGameStatus(id) {
    const url = `https://gruppe3.toni-barth.com/games/${id}`;
  
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error retrieving Game');
      }
      return response.json();
    })
    .then(data => {
      console.log('Status:\n', data.board);
      return data; 
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; 
    });
    
}
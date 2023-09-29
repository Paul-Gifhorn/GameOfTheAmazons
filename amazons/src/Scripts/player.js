// -------------------
// Scripts about adding deleting and get Players
// Also whole reset 
// -------------------

// adds Player 
export function addPlayer(thename){
    const url = 'https://gruppe3.toni-barth.com/players/';

    // Data for the player
    const data = {
    "name": thename,
    "testvalue": 42,
    "controllable":true,
    };

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

export function deletePlayer(id) {
    const url = `https://gruppe3.toni-barth.com/players/${id}`;
  
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
        }
        console.log('Player deleted');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }



  export function getPlayers() {
    const url = 'https://gruppe3.toni-barth.com/players/';
  
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

  export function reset() {
    const url = `https://gruppe3.toni-barth.com/reset/`;
  
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
        }
        console.log('resetet');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
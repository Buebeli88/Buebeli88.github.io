const team = {
  _players: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 28 },
    { firstName: "Mike", lastName: "Johnson", age: 22 },
  ],
  _games: [
    { opponent: "Tigers", teamPoints: 30, opponentPoints: 27 },
    { opponent: "Lions", teamPoints: 22, opponentPoints: 24 },
    { opponent: "Bears", teamPoints: 28, opponentPoints: 26 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

// Add new player
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);

// Format players for display
const playersHTML = team.players
  .map((player) => {
    return `<p>${player.firstName} ${player.lastName}, Age: ${player.age}</p>`;
  })
  .join("");

// Format games for display
const gamesHTML = team.games
  .map((game) => {
    return `<p>Opponent: ${game.opponent} — Team: ${game.teamPoints}, Opponent: ${game.opponentPoints}</p>`;
  })
  .join("");

// Insert formatted HTML into the page
document.getElementById("result").innerHTML = playersHTML;
document.getElementById("result1").innerHTML = gamesHTML;

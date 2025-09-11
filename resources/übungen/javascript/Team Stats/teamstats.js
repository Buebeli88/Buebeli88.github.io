// Objekt "team" verwaltet Spieler- und Spiel-Daten
const team = {
  // Privates Array mit Spielern (Initialdaten)
  _players: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 28 },
    { firstName: "Mike", lastName: "Johnson", age: 22 },
  ],
  // Privates Array mit Spielen (Initialdaten)
  _games: [
    { opponent: "Tigers", teamPoints: 30, opponentPoints: 27 },
    { opponent: "Lions", teamPoints: 22, opponentPoints: 24 },
    { opponent: "Bears", teamPoints: 28, opponentPoints: 26 },
  ],

  // Getter für Spieler (ermöglicht Zugriff auf _players)
  get players() {
    return this._players;
  },

  // Getter für Spiele (ermöglicht Zugriff auf _games)
  get games() {
    return this._games;
  },

  // Methode zum Hinzufügen eines neuen Spielers zum Team
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  // Methode zum Hinzufügen eines neuen Spiels zur Spielhistorie
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

// Funktion zur Anzeige der Spieler und Spiele im HTML
function updateDisplay() {
  // Spieler-Daten in HTML-Absätze umwandeln
  const playersHTML = team.players
    .map((player) => {
      return `<p>${player.firstName} ${player.lastName}, Age: ${player.age}</p>`;
    })
    .join("");

  // Spiel-Daten in HTML-Absätze umwandeln
  const gamesHTML = team.games
    .map((game) => {
      return `<p>Opponent: ${game.opponent} — Team: ${game.teamPoints}, Opponent: ${game.opponentPoints}</p>`;
    })
    .join("");

  // HTML-Inhalt in entsprechende Container schreiben
  document.getElementById("result").innerHTML = playersHTML;
  document.getElementById("result1").innerHTML = gamesHTML;
}

// Initiale Anzeige der Daten beim Laden der Seite
updateDisplay();

// Event Listener für das Spieler-Formular (bei Absenden)
document.getElementById("playerForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Verhindert das automatische Neuladen der Seite

  // Eingaben aus dem Formular auslesen und trimmen (Leerzeichen entfernen)
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = parseInt(document.getElementById("age").value);

  // Überprüfen, ob alle Felder korrekt ausgefüllt sind
  if (firstName && lastName && !isNaN(age)) {
    // Neuen Spieler hinzufügen
    team.addPlayer(firstName, lastName, age);
    // Anzeige aktualisieren
    updateDisplay();
    // Formular zurücksetzen
    this.reset();
  } else {
    // Fehlermeldung bei ungültigen Eingaben
    alert("Bitte alle Felder korrekt ausfüllen.");
  }
});

// Event Listener für das Spiel-Formular (bei Absenden)
document.getElementById("gameForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Verhindert das automatische Neuladen der Seite

  // Eingaben aus dem Formular auslesen und trimmen
  const opponent = document.getElementById("opponent").value.trim();
  const teamPoints = parseInt(document.getElementById("teamPoints").value);
  const opponentPoints = parseInt(document.getElementById("opponentPoints").value);

  // Überprüfen, ob alle Felder korrekt ausgefüllt sind
  if (opponent && !isNaN(teamPoints) && !isNaN(opponentPoints)) {
    // Neues Spiel hinzufügen
    team.addGame(opponent, teamPoints, opponentPoints);
    // Anzeige aktualisieren
    updateDisplay();
    // Formular zurücksetzen
    this.reset();
  } else {
    // Fehlermeldung bei ungültigen Eingaben
    alert("Bitte alle Felder korrekt ausfüllen.");
  }
});

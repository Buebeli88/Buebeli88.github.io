// Funktion zur Validierung und Umwandlung der Benutzerauswahl in Kleinbuchstaben
const getUserChoice = (userInput) => {
  const choice = userInput.toLowerCase(); // Umwandlung in Kleinbuchstaben zur Sicherheit

  // Überprüfung, ob die Eingabe gültig ist
  if (
    choice === "rock" ||
    choice === "paper" ||
    choice === "scissors" ||
    choice === "bomb" // "bomb" ist ein geheimer Cheat-Code
  ) {
    return choice;
  } else {
    console.log("Error: Invalid choice."); // Fehlermeldung bei ungültiger Eingabe
  }
};

// Funktion, die eine zufällige Wahl für den Computer generiert
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // Zufallszahl zwischen 0 und 2

  // Rückgabe der Wahl anhand der Zufallszahl
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

// Funktion zur Bestimmung des Gewinners basierend auf den Regeln
const determineWinner = (userChoice, computerChoice) => {
  // Sonderfall: Cheat-Code "bomb"
  if (userChoice === "bomb") {
    return "BOOM! You used the secret cheat code. You win!";
  }

  // Wenn beide dieselbe Wahl getroffen haben, ist es ein Unentschieden
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // Spielregeln: Wer gewinnt gegen wen?
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins! Paper covers rock.";
    } else {
      return "You win! Rock smashes scissors.";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins! Scissors cut paper.";
    } else {
      return "You win! Paper covers rock.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins! Rock smashes scissors.";
    } else {
      return "You win! Scissors cut paper.";
    }
  }
};

// Hauptfunktion, die das Spiel startet
const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);           // Benutzerauswahl
  const computerChoice = getComputerChoice();            // Computerauswahl
  const resultText = determineWinner(userChoice, computerChoice); // Ergebnis

  // HTML-Ausgabe für das Spielergebnis
  const resultMessage = `
    <p>You chose: <strong>${userChoice}</strong></p>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    <p><strong>${resultText}</strong></p>
  `;

  // Setzt das Spielergebnis in das HTML-Dokument ein
  document.getElementById("result").innerHTML = resultMessage;

  // Anzeige eines Bildes je nach Ausgang des Spiels
  const outcomeImageDiv = document.getElementById("game-outcome-image");

  if (resultText.includes("You win")) {
    // Bei Spielgewinn des Spielers: Gewinnbild anzeigen
    outcomeImageDiv.innerHTML = `<img src="win.jpg" alt="You Win!" style="width: 200px;" />`;
  } else if (resultText.includes("Computer wins")) {
    // Bei Niederlage: Verlustbild anzeigen
    outcomeImageDiv.innerHTML = `<img src="lose.jpg" alt="You Lose!" style="width: 200px;" />`;
  } else {
    // Bei Unentschieden kein Bild anzeigen
    outcomeImageDiv.innerHTML = "";
  }
};
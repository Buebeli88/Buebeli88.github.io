const getUserChoice = (userInput) => {
  const choice = userInput.toLowerCase();
  if (
    choice === "rock" ||
    choice === "paper" ||
    choice === "scissors" ||
    choice === "bomb"
  ) {
    return choice;
  } else {
    console.log("Error: Invalid choice.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
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

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "BOOM! You used the secret cheat code. You win!";
  }

  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

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

const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  const resultText = determineWinner(userChoice, computerChoice);

  const resultMessage = `
    <p>You chose: <strong>${userChoice}</strong></p>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    <p><strong>${resultText}</strong></p>
  `;

  document.getElementById("result").innerHTML = resultMessage;

  const outcomeImageDiv = document.getElementById("game-outcome-image");

  if (resultText.includes("You win")) {
    outcomeImageDiv.innerHTML = `<img src="win.jpg" alt="You Win!" style="width: 200px;" />`;
  } else if (resultText.includes("Computer wins")) {
    outcomeImageDiv.innerHTML = `<img src="lose.jpg" alt="You Lose!" style="width: 200px;" />`;
  } else {
    outcomeImageDiv.innerHTML = ""; // Kein Bild bei Unentschieden
  }
};

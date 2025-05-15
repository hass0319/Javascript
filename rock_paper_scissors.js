const prompt = require("prompt-sync")({ sigint: true });

let restart = true;
let wins = 0;
let losses = 0;
let ties = 0;

while (restart) {
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput; //console.log(`you choose ${userInput}`);
    } else {
      return console.log("Please enter either rock, paper or scissors");
    }
  };

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); //0 1 2
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
      default:
        break;
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    switch (true) {
      case userChoice === computerChoice:
        ties++;
        return "it's a tie";
        break;

      case userChoice === "rock" && computerChoice === "scissors":
      case userChoice === "paper" && computerChoice === "rock":
      case userChoice === "scissors" && computerChoice === "paper":
        wins++;
        return "You win";
        break;

      case userChoice === "rock" && computerChoice === "paper":
      case userChoice === "paper" && computerChoice === "scissors":
      case userChoice === "scissors" && computerChoice === "rock":
        losses++;
        return "You loose";
        break;

      default:
        break;
    }
  };

  let userChoice = getUserChoice(prompt("Choose rock/paper/scissors: "));

  if (userChoice) {
    let computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}.`);
    console.log(`The Computer chose ${computerChoice}.`);
    console.log(`${determineWinner(userChoice, computerChoice)}.`);
    console.log(`wins: ${wins} losses: ${losses} ties: ${ties}`);
  }

  let answer = false;

  while (!answer) {
    let again = prompt("Would you like to play?(yes/no)").toLowerCase();

    if (again === "no" || again === "n") {
      restart = false;
      answer = true;
      console.log("Thank you for playing :D");
    } else if (again === "yes" || again === "y") {
      restart = true;
      answer = true;
    } else {
      console.log("please enter yes/y or no/n ");
    }
  }
}

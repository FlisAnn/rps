const winner = (humanChoice, computerChoice) => {
  let result;

  switch (true) {
    case humanChoice == "rock" && computerChoice == "rock":
      return result = ("It's a tie!");
    case humanChoice == "rock" && computerChoice == "scissors":
      return result = ("You win!");
    case humanChoice == "rock" && computerChoice == "paper":
      return result = ("Computer wins!");

    case humanChoice == "paper" && computerChoice == "paper":
      return result = ("It's a tie!");
    case humanChoice == "paper" && computerChoice == "rock":
      return result = ("You win!");
    case humanChoice == "paper" && computerChoice == "scissors":
      return result = ("Computer wins!");

    case humanChoice == "scissors" && computerChoice == "scissors":
      return result = ("It's a tie!");
    case humanChoice == "scissors" && computerChoice == "paper":
      return result = ("You win!");
    case humanChoice == "scissors" && computerChoice == "rock":
      return result = ("Computer wins!");
  }
  return result;
};
export default winner;



// `Computer selected ${computerChoice} and it is a tie`
// `Computer selected ${computerChoice} and you won!`
// `Computer selected ${computerChoice} and Computer won!`
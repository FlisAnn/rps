const winner = (humanChoice, computerChoice) => {
  let result;

  switch (true) {
    case humanChoice == "rock" && computerChoice == "rock":
      return result = (`Computer picked ${computerChoice} so it's a tie!`);
    case humanChoice == "rock" && computerChoice == "scissors":
      return result = (`Computer picked ${computerChoice} so you win!`);
    case humanChoice == "rock" && computerChoice == "paper":
      return result = (`Computer picked ${computerChoice} so Computer wins!`);

    case humanChoice == "paper" && computerChoice == "paper":
      return result = (`Computer picked ${computerChoice} so it's a tie!`);
    case humanChoice == "paper" && computerChoice == "rock":
      return result = (`Computer picked ${computerChoice} so you win!`);
    case humanChoice == "paper" && computerChoice == "scissors":
      return result = (`Computer picked ${computerChoice} so Computer wins!`);

    case humanChoice == "scissors" && computerChoice == "scissors":
      return result = (`Computer picked ${computerChoice} so it's a tie!`);
    case humanChoice == "scissors" && computerChoice == "paper":
      return result = (`Computer picked ${computerChoice} so you win!`);
    case humanChoice == "scissors" && computerChoice == "rock":
      return result = (`Computer picked ${computerChoice} so Computer wins!`);
  }
  return result;
};
export default winner;



// `Computer selected ${computerChoice} and it is a tie`
// `Computer selected ${computerChoice} and you won!`
// `Computer selected ${computerChoice} and Computer won!`
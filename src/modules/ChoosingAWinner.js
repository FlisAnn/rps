const winner = (humanChoice, computerChoice) => {
  let result;
  let history;

  switch (true) {
    case humanChoice == "rock" && computerChoice == "rock":
      return (result = "Computer selected ${computerChoice} and it is a tie");
    case humanChoice == "rock" && computerChoice == "scissors":
      return (result = "Computer selected ${computerChoice} and you won!");
    case humanChoice == "rock" && computerChoice == "paper":
      return (result = "Computer selected ${computerChoice} and Computer won!");
      break;

    default:
      break;
  }
};
export default winner;

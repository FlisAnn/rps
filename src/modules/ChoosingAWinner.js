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

    case humanChoice == "paper" && computerChoice == "paper":
      return (result = "Computer selected ${computerChoice} and it is a tie");
    case humanChoice == "paper" && computerChoice == "rock":
      return (result = "Computer selected ${computerChoice} and you won!");
    case humanChoice == "paper" && computerChoice == "scissors":
      return (result = "Computer selected ${computerChoice} and Computer won!");

    case humanChoice == "scissors" && computerChoice == "scissors":
      return (result = "Computer selected ${computerChoice} and it is a tie");
    case humanChoice == "scissors" && computerChoice == "paper":
      return (result = "Computer selected ${computerChoice} and you won!");
    case humanChoice == "scissors" && computerChoice == "rock":
      return (result = "Computer selected ${computerChoice} and Computer won!");
  }
  return result;
};
export default winner;

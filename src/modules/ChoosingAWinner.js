const winner = (humanChoice, computerChoice) => {
  let result;

  switch (true) {
    case humanChoice === "rock" && computerChoice === "rock":
      return (result = `It's a Tie! Computer also picked ${computerChoice}`);
    case humanChoice === "rock" && computerChoice === "scissors":
      return (result = `You win! Computer picked ${computerChoice}`);
    case humanChoice === "rock" && computerChoice === "paper":
      return (result = `Computer wins! Computer picked ${computerChoice}`);

    case humanChoice === "paper" && computerChoice === "paper":
      return (result = `It's a Tie! Computer also picked ${computerChoice}`);
    case humanChoice === "paper" && computerChoice === "rock":
      return (result = `You win! Computer picked ${computerChoice}`);
    case humanChoice === "paper" && computerChoice === "scissors":
      return (result = `Computer wins! Computer picked ${computerChoice}`);

    case humanChoice === "scissors" && computerChoice === "scissors":
      return (result = `It's a Tie! Computer also picked ${computerChoice}`);
    case humanChoice === "scissors" && computerChoice === "paper":
      return (result = `You win! Computer picked ${computerChoice}`);
    case humanChoice === "scissors" && computerChoice === "rock":
      return (result = `Computer wins! Computer picked ${computerChoice}`);
  }
  return result;
};
export default winner;

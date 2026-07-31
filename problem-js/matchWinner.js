function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number" || teamAGoals < 0 || teamBGoals < 0) {
    return "Invalid";
  }
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  }
  if (teamBGoals > teamAGoals) {
    return "Team B Won";
  }
  return "Draw";
}

console.log(matchWinner(2, 1));
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));
console.log(matchWinner("3", 2));

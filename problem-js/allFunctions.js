function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== "number" ||
    typeof teamBGoals !== "number" ||
    teamAGoals < 0 ||
    teamBGoals < 0
  ) {
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

function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < weights.length; i++) {
    if (typeof weights[i] !== "number") {
      return "Invalid";
    }
    total += weights[i];
  }

  return total <= 400;
}

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }

  let extraTokens = tokensUsed - 500;
  let extraUnits = Math.floor(extraTokens / 100);
  let cost = extraUnits * 5;

  return cost;
}

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let topRestaurant = restaurants[0];

  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > topRestaurant.rating) {
      topRestaurant = restaurants[i];
    }
  }

  return topRestaurant.name.toUpperCase();
}

function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total = total + times[i];
  }

  return total / times.length;
}

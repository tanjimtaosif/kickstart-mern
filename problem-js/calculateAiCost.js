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

console.log(calculateAiCost(200));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(500));
console.log(calculateAiCost("200"));

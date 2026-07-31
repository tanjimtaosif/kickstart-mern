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

console.log(averageResponseTime([120, 150, 130]));
console.log(averageResponseTime([]));
console.log(averageResponseTime("120, 200"));
console.log(averageResponseTime([120, "200", 150]));

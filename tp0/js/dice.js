export function rollDices() {
    bestResult = 0;
        let dice1 = Math.round(Math.random() * (6 - 1) + 1)
        let dice2 = Math.round(Math.random() * (6 - 1) + 1)
        let result = dice1 + dice2
        if (result > bestResult) {
            bestResult = result;
        }
    return bestResult;
}
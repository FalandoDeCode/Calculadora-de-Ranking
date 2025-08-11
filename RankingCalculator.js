// RankingCalculator.js version 1.0
// Author: Matheus Rios (Falando deCode)
// Date: 11/08/2025
// Description: A simple ranking matches calculator
// Type your victories and defeats to know your ranking class

// import necessary libraries if needed

const readlineSync = require('readline-sync');


    
function getRankingClass(victoriesBalance) {
    if (victoriesBalance < 10) {
        return { ranking: "Iron", message: "Keep trying!" };
    } else if (victoriesBalance >= 10 && victoriesBalance <= 20) {
        return { ranking: "Bronze", message: "Good job!" };
    } else if (victoriesBalance >= 21 && victoriesBalance <= 50) {
        return { ranking: "Silver", message: "Well done!" };
    } else if (victoriesBalance >= 51 && victoriesBalance <= 80) {
        return { ranking: "Gold", message: "Keep it up!" };
    } else if (victoriesBalance >= 81 && victoriesBalance <= 90) {
        return { ranking: "Diamond", message: "You're on fire!" };
    } else if (victoriesBalance >= 91 && victoriesBalance <= 100) {
        return { ranking: "Legendary", message: "You're a legend!" };
    } else if (victoriesBalance > 100) {
        return { ranking: "Immortal", message: "Unstoppable!" };
    }
}

function calculateRanking() {
    const victories = parseInt(readlineSync.question("Enter the number of victories: "));
    const defeats = parseInt(readlineSync.question("Enter the number of defeats: "));
    const victoriesBalance = victories - defeats;


    const result = getRankingClass(victoriesBalance);
    console.log(`${result.message} Your Hero have: ${victoriesBalance} victories and at the ${result.ranking} level.`);
}

calculateRanking();

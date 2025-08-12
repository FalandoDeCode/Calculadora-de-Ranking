const readlineSync = require('readline-sync');
const translations = require('./translations.js');

function getRankingClass(victoriesBalance, lang) {
    let rank;
    if (victoriesBalance < 10) {
        rank = "Iron";
    } else if (victoriesBalance >= 10 && victoriesBalance <= 20) {
        rank = "Bronze";
    } else if (victoriesBalance >= 21 && victoriesBalance <= 50) {
        rank = "Silver";
    } else if (victoriesBalance >= 51 && victoriesBalance <= 80) {
        rank = "Gold";
    } else if (victoriesBalance >= 81 && victoriesBalance <= 90) {
        rank = "Diamond";
    } else if (victoriesBalance >= 91 && victoriesBalance <= 100) {
        rank = "Legendary";
    } else if (victoriesBalance > 100) {
        rank = "Immortal";
    }

    const message = translations[lang].rank_messages[rank];
    return { ranking: rank, message: message };
}

function calculateRanking() {
    let lang = 'en'; // Default language

    // Initial prompt to allow language change
    const initialInput = readlineSync.question("Enter victories or type 'language' to select language: ");

    let victories;
    if (initialInput.toLowerCase() === 'language') {
        const selectedLang = readlineSync.question(translations.en.change_language_prompt).toLowerCase();
        if (selectedLang === 'pt' || selectedLang === 'en') {
            lang = selectedLang;
            console.log(translations[lang].language_selected);
        } else {
            console.log("Invalid language selected, defaulting to English.");
        }
        victories = parseInt(readlineSync.question(translations[lang].prompt_victories));
    } else {
        victories = parseInt(initialInput);
    }

    const defeats = parseInt(readlineSync.question(translations[lang].prompt_defeats));
    const victoriesBalance = victories - defeats;

    const result = getRankingClass(victoriesBalance, lang);
    
    let resultMessage = translations[lang].result_message;
    resultMessage = resultMessage.replace('{message}', result.message);
    resultMessage = resultMessage.replace('{victoriesBalance}', victoriesBalance);
    resultMessage = resultMessage.replace('{ranking}', result.ranking);

    console.log(resultMessage);
}

calculateRanking();
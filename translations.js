const translations = {
    en: {
        prompt_victories: "Enter the number of victories: ",
        prompt_defeats: "Enter the number of defeats: ",
        change_language_prompt: "Enter 'en' for English or 'pt' for Portuguese: ",
        language_selected: "Language set to English.",
        rank_messages: {
            Iron: "Keep trying!",
            Bronze: "Good job!",
            Silver: "Well done!",
            Gold: "Keep it up!",
            Diamond: "You're on fire!",
            Legendary: "You're a legend!",
            Immortal: "Unstoppable!"
        },
        result_message: "{message} Your Hero have: {victoriesBalance} victories and at the {ranking} level"
    },
    pt: {
        prompt_victories: "Digite o número de vitórias: ",
        prompt_defeats: "Digite o número de derrotas: ",
        change_language_prompt: "Digite 'en' para Inglês ou 'pt' para Português: ",
        language_selected: "Idioma definido para Português.",
        rank_messages: {
            Iron: "Continue tentando!",
            Bronze: "Bom trabalho!",
            Silver: "Muito bem!",
            Gold: "Continue assim!",
            Diamond: "Você está com tudo!",
            Legendary: "Você é uma lenda!",
            Immortal: "Imparável!"
        },
        result_message: "{message} Seu Herói tem: {victoriesBalance} vitórias e está no nível {ranking}"
    }
};

module.exports = translations;
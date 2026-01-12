// ASCII Art for each choice
const ROCK_ART = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const PAPER_ART = `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`;

const SCISSORS_ART = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

// Get ASCII art for a choice
const getChoiceASCII = (choice) => {
    if (choice === 'rock') return ROCK_ART;
    if (choice === 'paper') return PAPER_ART;
    if (choice === 'scissors') return SCISSORS_ART;
    return '';
};

// Validate user input
const isValidChoice = (choice) => {
    const validChoices = ['rock', 'paper', 'scissors'];
    return validChoices.includes(choice.toLowerCase().trim());
};

// Generate random computer choice
const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Calculate winner
const calculateWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winConditions[playerChoice] === computerChoice) {
        return 'player';
    }

    return 'computer';
};

// Get result message
const getResultMessage = (playerChoice, computerChoice, winner) => {
    if (winner === 'tie') {
        return 'It\'s a tie! Great minds think alike! 🤝';
    }

    const messages = {
        rock: {
            scissors: 'Rock crushes scissors!',
            paper: 'Paper covers rock!'
        },
        paper: {
            rock: 'Paper covers rock!',
            scissors: 'Scissors cuts paper!'
        },
        scissors: {
            paper: 'Scissors cuts paper!',
            rock: 'Rock crushes scissors!'
        }
    };

    const winningChoice = winner === 'player' ? playerChoice : computerChoice;
    const losingChoice = winner === 'player' ? computerChoice : playerChoice;
    const message = messages[winningChoice][losingChoice];

    if (winner === 'player') {
        return `${message} You win! 🎉`;
    } else {
        return `${message} You lose! 😢`;
    }
};

// Calculate win percentage
const calculateWinPercentage = (wins, totalGames) => {
    if (totalGames === 0) return 0;
    return Math.round((wins / totalGames) * 100);
};

module.exports = {
    getChoiceASCII,
    isValidChoice,
    generateComputerChoice,
    calculateWinner,
    getResultMessage,
    calculateWinPercentage
}; 
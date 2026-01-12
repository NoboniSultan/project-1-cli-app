const { getChoiceASCII } = require('./task');
const displayMenu = require('./menu');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Game data object
const gameData = {
    wins: 0,
    losses: 0,
    ties: 0
};

// ASCII Art for welcome
const welcomeArt = `
╔═══════════════════════════════════════╗
║                                       ║
║   🪨  ROCK  PAPER  SCISSORS  ✂️       ║
║                                       ║
║       LET'S PLAY A GAME!              ║
║                                       ║
╚═══════════════════════════════════════╝
`;

// Start the game
const startGame = () => {
    console.clear();
    console.log(welcomeArt);
    console.log('\nWelcome to Rock-Paper-Scissors!\n');
    showMainMenu();
};

// Show main menu
const showMainMenu = () => {
    displayMenu.showMenu(rl, handleMenuChoice);
};

// Handle menu choice
const handleMenuChoice = (choice) => {
    if (choice === '1') {
        playRound();
    } else if (choice === '2') {
        displayMenu.showStats(gameData);
        showMainMenu();
    } else if (choice === '3') {
        exitGame();
    } else {
        console.log('\n❌ Invalid choice! Please enter 1, 2, or 3.\n');
        showMainMenu();
    }
};

// Play a round
const playRound = () => {
    rl.question('\nChoose a move (rock, paper, or scissors): ', (userChoice) => {
        const normalizedChoice = userChoice.toLowerCase().trim();

        if (normalizedChoice !== 'rock' && normalizedChoice !== 'paper' && normalizedChoice !== 'scissors') {
            console.log('\n❌ Invalid move! Please choose rock, paper, or scissors.\n');
            playRound();
            return;
        }

        const computerChoice = getComputerChoice();
        const result = determineWinner(normalizedChoice, computerChoice);

        displayRoundResult(normalizedChoice, computerChoice, result);
        updateGameData(result);

        showMainMenu();
    });
};

// Get random computer choice
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }

    return 'loss';
};

// Display the round result
const displayRoundResult = (userChoice, computerChoice, result) => {
    console.log('\n' + '='.repeat(40));
    console.log('You chose:');
    console.log(getChoiceASCII(userChoice));
    console.log('Computer chose:');
    console.log(getChoiceASCII(computerChoice));

    console.log('='.repeat(40));

    if (result === 'tie') {
        console.log('\n🤝 It\'s a tie!\n');
    } else if (result === 'win') {
        const winMessage = getWinMessage(userChoice, computerChoice);
        console.log(`\n🎉 ${winMessage} You win!\n`);
    } else {
        const loseMessage = getWinMessage(computerChoice, userChoice);
        console.log(`\n😢 ${loseMessage} You lose!\n`);
    }
};

// Get win message
const getWinMessage = (winner, loser) => {
    if (winner === 'rock') return 'Rock crushes scissors!';
    if (winner === 'paper') return 'Paper covers rock!';
    if (winner === 'scissors') return 'Scissors cuts paper!';
};

// Update game data
const updateGameData = (result) => {
    if (result === 'win') {
        gameData.wins++;
    } else if (result === 'loss') {
        gameData.losses++;
    } else {
        gameData.ties++;
    }
};

// Exit game
const exitGame = () => {
    console.log('\n' + '='.repeat(40));
    console.log('FINAL STATISTICS');
    console.log('='.repeat(40));
    displayMenu.showStats(gameData);
    console.log('\n👋 Thanks for playing! Goodbye!\n');
    rl.close();
};

// Start the game when script runs
startGame();
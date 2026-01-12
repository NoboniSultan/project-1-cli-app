const readline = require('readline');


// Show main menu
const showMenu = (rl, callback) => {
    console.log('╔═══════════════════════════════════════╗');
    console.log('║              MENU                     ║');
    console.log('╠═══════════════════════════════════════╣');
    console.log('║  1. Play Round                        ║');
    console.log('║  2. View Stats                        ║');
    console.log('║  3. Exit                              ║');
    console.log('╚═══════════════════════════════════════╝');

    rl.question('\nChoose an Action (Enter 1-3): ', (choice) => {
        callback(choice.trim());
    });
};

// Show statistics
const showStats = (gameData) => {
    const totalGames = gameData.wins + gameData.losses + gameData.ties;
    const winRate = totalGames > 0
        ? Math.round((gameData.wins / totalGames) * 100)
        : 0;

    console.log('\n' + '='.repeat(40));
    console.log('📊 CURRENT STATISTICS');
    console.log('='.repeat(40));
    console.log(`Games Won:    ${gameData.wins}`);
    console.log(`Games Lost:   ${gameData.losses}`);
    console.log(`Games Tied:   ${gameData.ties}`);
    console.log(`Total Games:  ${totalGames}`);
    console.log(`Win Rate:     ${winRate}%`);
    console.log('='.repeat(40) + '\n');
};

module.exports = {
    showMenu,
    showStats
};
1. Share one aspect of building this project you found challenging and how you overcame it.

One aspect of this project that I found challenging was managing user input across multiple files while using the `readline` module. Both`index.js` and `menu.js` needed to accept user input, and at first I was confused about how the program should flow without causing conflicts or unexpected behavior. I noticed that having multiple `readline` interfaces could be tricky if they weren’t handled carefully.

I overcame this challenge by clearly separating responsibilities between files. The `menu.js` file only handles displaying the menu and collecting the user’s menu choice, while `index.js` controls the overall game logic and flow. Using **callback functions** helped me pass the user’s choice back to the main game logic without tightly coupling the files together. This made the program easier to understand, debug, and expand.


2. Share one technical concept that you gained a deeper understanding of through building this project. Explain that concept in simple terms and explain how it is used in your project.

A technical concept I gained a deeper understanding of through this project is modular programming. In simple terms, modular programming means breaking a large program into smaller, reusable pieces (modules), where each file has a specific job.
In this project, I used modules by separating the menu system (`menu.js`), the main game logic (`index.js`), and helper functions like game rules and ASCII art (`task.js`). Each module exports functions using `module.exports`, and other files import them using `require()`. This made the code more organized and prevented everything from being written in one large file. It also made it easier to test and update individual parts of the game without breaking the entire program.



// Game scores
let userScore = 0;
let computerScore = 0;

// Available choices
const choices = ["rock", "paper", "scissors"];

// Emoji for each choice
const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

// Main game function
function playGame(userChoice) {

    // Computer selects a random option
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    // Show both choices
    document.getElementById("userChoice").textContent =
        emojis[userChoice];

    document.getElementById("computerChoice").textContent =
        emojis[computerChoice];

    let result = "";

    // Check if the game is a draw
    if (userChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    }

    // Check winning conditions
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        userScore++;
        result = "🎉 You Win! Great Move!";

    }

    // Otherwise computer wins
    else {

        computerScore++;
        result = "😈 You Lose! Try Again!";

    }

    // Display result
    document.getElementById("message").textContent = result;

    // Update scores
    document.getElementById("userScore").textContent = userScore;

    document.getElementById("computerScore").textContent =
        computerScore;
}

// Restart game function
function restartGame() {

    // Reset both scores
    userScore = 0;
    computerScore = 0;

    // Update scoreboard
    document.getElementById("userScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    // Reset game display
    document.getElementById("userChoice").textContent = "❔";
    document.getElementById("computerChoice").textContent = "❔";

    document.getElementById("message").textContent =
        "New Game! Make your move 🚀";
}

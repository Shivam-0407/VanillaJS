
# Description
This is a simple implementation of the Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid, with the objective of getting three of their marks in a row (either horizontally, vertically, or diagonally) to win the game. If all nine cells are filled without any player getting three marks in a row, the game ends in a draw.

# Features
Player Turns: The game alternates turns between Player X and Player O.
Win Detection: The game checks for a winner after every move.
Draw Detection: The game detects a draw when all cells are filled without a winner.
Real-Time Updates: The game board updates in real-time as players make their moves.
# Initialization
Game State Initialization
Current Player:A variable curr_Player is initialized to 'X' to track the current player.
Board State:

An array arr of size 9 is initialized with null values to represent the board's state.

## Winner Check Function (checkWinnner)
The checkWinnner function checks if there is a winner by evaluating possible winning combinations:

Rows: [0, 1, 2], [3, 4, 5], [6, 7, 8]

Columns: [0, 3, 6], [1, 4, 7], [2, 5, 8]

Diagonals: [0, 4, 8], [2, 4, 6]

If any of these combinations contain the same non-null value, the current player is declared the winner, and the game ends.
If the board is full (no null values) and no winner is found, the game is declared a draw.

## Click Handler Function (handleClick)

The handleClick function is triggered when a cell is clicked.
It checks if the clicked cell is already occupied (arr[ele.id] != null). If so, it returns without making any changes.

If the cell is empty, it updates the cell with the current player's symbol (X or O) and updates the board state (arr).
It then calls checkWinnner to determine if there is a winner or a draw.

Finally, it switches the current player (curr_Player).
## How It Works
The game initializes with an empty board and X as the first player.

When a player clicks on an empty cell, the handleClick function updates the cell with the current player's symbol and checks for a winner or draw.

The checkWinnner function evaluates the board's state to determine if there is a winner or a draw.

The game continues until either a player wins or all cells are filled, resulting in a draw.

Usage

Open index.html in your web browser.

Click on any cell to make a move.

The game will automatically switch turns between Player X and Player O.

The game will display the winner or declare a draw when the game ends.

## File Structure

index.html: Contains the HTML structure of the game.

style.css: Contains the CSS for styling the game board.

script.js: Contains the JavaScript logic for the game.

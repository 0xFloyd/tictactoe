
 const Player = (name, marker) => {
    this.name = name;
    this.marker = marker;
    this.moves = [];
    this.score = 0;
    const playerName = () => name;
    const playerMarker = () => marker;
    const playerMoves = () => moves;

    return {
        name,
        marker,
        moves,
        playerName,
        playerMarker,
        playerMoves,
        score,
    };
 }

 
 const gameBoard = (() => {     //gameboard module. IIFE (Immediately Invoked Function Expression)
    let gameBoard = [];
    let boardSpacesArray = document.getElementsByClassName('boardSpace');
    let gameScore = document.getElementById('score-paragraph');

    const playerClicked = (event) => { 
        if (!gameBoard.includes(Number(event.target.id))) {
            gameBoard.push(Number(event.target.id)); 
            temporary = game.switchPlayer();
            temporary.moves.push(Number(event.target.id));
            event.target.innerHTML = temporary.marker;
            game.checkWinner(temporary);
        }

        else {
            return;
        }
           
    }

    const addClickEvent = () => {
        Array.from(boardSpacesArray).forEach((element) => {
            element.addEventListener('click', playerClicked); //console.log(element);
        });
    };

    
    const removeClickEvent = () => {
        Array.from(boardSpacesArray).forEach((element) => {
            element.removeEventListener('click', playerClicked, false); //console.log(element);
        });
    };
    
    addClickEvent();

    return {
        gameBoard,
        boardSpacesArray,
        playerClicked,
        gameScore,
        addClickEvent,
        removeClickEvent
    };
})();



const game =(() => {
    player1 = Player('Player 1', 'X');
    player2 = Player('Player 2', 'O');
    
    const updateScore = () => {
          document.getElementById("player1DisplayScore").innerHTML = player1.score;
          document.getElementById("player2DisplayScore").innerHTML = player2.score;
    }
   

    let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let currentPlayer = player2;
    const switchPlayer = () => {
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
        return currentPlayer;    
    }

    const checker = (arr, target) => target.every(v => arr.includes(v));

    const checkWinner = (temporary) => {
        checkPlayer = temporary;        
         
        Array.from(winningCombinations).forEach((element) => {
            if (checker(checkPlayer.moves, element)) {
                //console.log(checkPlayer.name);
                gameBoard.gameScore.innerHTML = checkPlayer.name + " wins!";
                gameBoard.removeClickEvent();
                checkPlayer.score += 1;
                updateScore();
                boardResetButton.style.display = "block";
            }

            else if (gameBoard.gameBoard.length == 9) {
                boardResetButton.style.display = "block";
                gameBoard.removeClickEvent();
                gameBoard.gameScore.innerHTML = "Tie Game!";
            }

            else {
                return;
            }
        });
    };

    const clearBoard = () => {
        boardResetButton.style.display = "none";
        gameBoard.gameScore.innerHTML = "&nbsp;"
        gameBoard.gameBoard.length = 0;
        player1.moves = [];
        player2.moves = [];
        gameBoard.addClickEvent();

        Array.from(gameBoard.boardSpacesArray).forEach((element) => {
            element.innerHTML = "";

        });

    };

    const resetGame = () => {
        clearBoard();
        player1.score = 0;
        player2.score = 0;
        updateScore();
    };
    

    let boardResetButton = document.getElementById('boardResetButton');
    boardResetButton.addEventListener('click', clearBoard);
    let gameResetButton = document.getElementById('gameResetButton');
    gameResetButton.addEventListener('click', resetGame);

    return {
        currentPlayer,
        switchPlayer,
        clearBoard,
        resetGame,
        winningCombinations,
        checkWinner,
        player1,
        player2,
        checker,
        updateScore,
        boardResetButton,
        gameResetButton,
    };
    
})();
/*
const player = (name) => {
    
    const promptName = () => {
        console.log();
    };

    return {promptName}
};
*/





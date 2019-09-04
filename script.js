
 const Player = (name, marker) => {
    this.name = name;
    this.marker = marker;
    this.moves = [];
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

    Array.from(boardSpacesArray).forEach((element) => {
        element.addEventListener('click', playerClicked); //console.log(element);
    });

    return {gameBoard, boardSpacesArray, playerClicked, gameScore};
})();



const game =(() => {
    player1 = Player('Player 1', 'X');
    player2 = Player('Player 2', 'O');
    let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let currentPlayer = player2;
    const switchPlayer = () => {
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
        return currentPlayer;    
    }

    const clearBoard = ()  => {
        //turn = 0;
    }



    const checker = (arr, target) => target.every(v => arr.includes(v));


    const checkWinner = (temporary) => {
        checkPlayer = temporary;        
         
        Array.from(winningCombinations).forEach((element) => {
            if (checker(checkPlayer.moves, element)) {
                //console.log(checkPlayer.name);
                gameBoard.gameScore.innerHTML = checkPlayer.name;

            }

            else {
                return;
            }
            //console.log(checker(checkPlayer.moves, element))
                //console.log(element);
        });
        
        
        
       /*
        winningCombinations.forEach(function (element) {
            console.log(element)
            
        });*/

    }

    return {
        currentPlayer,
        switchPlayer,
        clearBoard,
        winningCombinations,
        checkWinner,
        player1,
        player2,
        checker,
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





 const player1 = new Player('Player 1', 'X');
 const player2 = new Player('Player 2', '0');


 function Player(name, marker) {
     this.name = name;
     this.marker = marker;
     this.moves = [];


 }

 
 const gameBoard = (() => {     //gameboard module. IIFE (Immediately Invoked Function Expression)
    let gameBoard = [];
    let boardSpacesArray = document.getElementsByClassName('boardSpace');

    const playerClicked = (event) => { 
        if (!gameBoard.includes(event.target.id)) {
            gameBoard.push(event.target.id); 
              //console.log(gameBoard);
            event.target.innerHTML = game.switchPlayer();
        }

        else {
            return;
        }       
    }

    Array.from(boardSpacesArray).forEach((element) => {
        element.addEventListener('click', playerClicked); //console.log(element);
    });

    return {gameBoard, boardSpacesArray, playerClicked};
})();



const game =(() => {
    let winningCombinations = []
    let currentPlayer;
    const switchPlayer = () => {
        currentPlayer == "X" ? currentPlayer = player2.marker : currentPlayer = player1.marker;
        return currentPlayer;    
    }

    const clearBoard = ()  => {
        //turn = 0;
    }

    return {
        currentPlayer,
        switchPlayer,
        clearBoard,
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





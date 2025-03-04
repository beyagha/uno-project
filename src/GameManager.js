import { io } from 'socket.io-client';

export class GameManager {

    constructor(socket) {
        this.socket = socket;
        this.socket.on("gameStart",this.gameIsStarting)
    }

    // je veux que ma partie commence
    gameIsStarting = ({players, currentPlayer, discardPile}) => {
        console.log(players, currentPlayer, discardPile)
    }
}


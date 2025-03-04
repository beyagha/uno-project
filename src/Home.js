import { io } from 'socket.io-client';
let players = []

//creer une classe home qui vas recuperer mes elmeent html et ajouter des evenements a ces element
export class Home {

  constructor(socket) {
    this.socket = socket;
    //creation d'une var pour recuperer mon element name
    this.name = document.getElementById('name');
    //ajouter l'evenement à l'element
    this.enter = document.getElementById("enter");
    this.ready = document.getElementById("ready")
    this.enter.addEventListener("click", this.onClickJoinTheGame);
    this.ready.addEventListener("click", this.onClickIsReady);
    this.socket.on("updatePlayers", this.createPlayer)
  }



onClickIsReady = () => {
    players.push(this.name.values)
    this.socket.emit('playerReady')
}


createPlayer(players){
  let mylist = document.getElementById("myList")
  //pour vider les elements de ma liste pour pas que chaque nom a chaque clique se repete
  mylist.innerHTML = "Are ready : "
  //pour aller dans chaque element du tableau
  for (let i = 0; i < players.length; i++) {
    let playersHTML = document.createElement("li")
    let textIsReady = document.createElement("p")
    let playerName = document.createTextNode(players[i].name)
    let isReady =""
    if (players[i].isReady) {
      isReady ="is Ready"
    }
    else {
      isReady = "Is Not Ready"
    }
    textIsReady.innerText = isReady;
    playersHTML.appendChild(playerName);
    mylist.appendChild(playersHTML)
    playersHTML.appendChild(textIsReady)
  }
}
  onClickJoinTheGame = () => {
    //disable button
    this.enter.disabled = 'true';
    this.enter.classList.add("enter-disable")
    //ecouter event updateplayers
    //afficher nom des jouers et leurs etats => creant des 'p' dans le html 
    document.getElementById("namevalide").innerHTML = "pseudo enregitré";

    // mettre name dans jsp 
    this.socket.emit('joinGame', (this.name.value))
    this.socket.on('joinGameStatus', (message) => {
      console.log(message.message)
      document.getElementById("namevalide").innerHTML = message.message
    })
  }


}
import { io } from 'socket.io-client';

//creer une classe home qui vas recuperer mes elmeent html et ajouter des evenements a ces element
export class Home {
    
    constructor(){
    this.socket = io('http://localhost:3000');
    //creation d'une var pour recuperer mon element name
    this.name = document.getElementById('name');
    //ajouter l'evenement à l'element
    this.enter = document.getElementById("enter");

    this.enter.addEventListener("click", this.onClick);
  }
  
  
  

  onClick = () => {
    
    //disable button
    document.getElementById(enter).disabled = 'true';
    //ecouter event updateplayers
    //afficher nom des jouers et lerus etats => creant des 'p' dans le html 
    document.getElementById("namevalide").innerHTML = "pseudo enregitré";
    console.log("okay");
    // mettre name dans jsp 
    this.socket.emit('joinGame', (this.name.value))
    this.socket.on('joinGameStatus',(message)=>{
        console.log(message)
    })

    //
  }
  

}
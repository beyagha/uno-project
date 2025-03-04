import { io } from 'socket.io-client';
import { Home } from './Home';
import {Card } from './Card';
import {GameManager } from './GameManager';
const socket = io('http://localhost:3000');

const onLoad = () =>{
  new Home(socket);
  new Card();
  new GameManager(socket);
}
window.addEventListener("DOMContentLoaded",onLoad)

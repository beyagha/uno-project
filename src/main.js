import { io } from 'socket.io-client';
import { Home } from './Home';

const onLoad = () =>{
  new Home();
}
window.addEventListener("DOMContentLoaded",onLoad)

import { createButton } from "./go.js";
import { state } from "./store.js";

let container = document.getElementById("container");

let button = createButton();
container.appendChild(button);
button.onclick = ()=>{
    state.gameStart = true;
    container.removeChild(button);
}



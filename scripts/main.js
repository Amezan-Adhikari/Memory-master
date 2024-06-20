import { gameComponent } from "./gamecomponent.js";
import { getWords } from "./getwords.js";
import { createButton } from "./go.js";
import { state } from "./store.js";
import { createWords } from "./words.js";

let container = document.getElementById("container");

let button = createButton();
container.appendChild(button);
button.onclick = ()=>{
    state.gameStart = true;
    startGame();
    container.removeChild(button);
}

function startGame(){
    let div = gameComponent();
    container.appendChild(div);
    getWords(10).forEach(word=>{
        document.getElementById("gameSpace").appendChild(createWords(word));
    })
    
}



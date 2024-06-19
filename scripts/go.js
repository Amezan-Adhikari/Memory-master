import { state } from "./store.js";


export function createButton(){
    let button = document.createElement("button");

    button.classList.add("herobutton");
    button.innerText = "GO";
    return button;
}
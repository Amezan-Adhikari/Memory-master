import { words } from "./store.js";

export function getWords(x){
    let arr = [];
    for(let i = 1;i<=x ; i++){
        arr.push(words[(Math.floor(Math.random()*words.length))])
    }
    return arr;
}
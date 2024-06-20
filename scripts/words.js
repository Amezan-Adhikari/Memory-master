export function createWords(text){
    let div = document.createElement("div");
    div.classList.add("wordBox");
    div.innerText = text;
    return div;
}
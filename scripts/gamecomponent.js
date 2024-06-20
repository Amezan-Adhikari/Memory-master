export function gameComponent(){
    let div = document.createElement("div");
    div.classList.add("mainGame");
    div.id = "mainGame";
    div.innerHTML = `
    <h1 class="text-lg text-center mt-5">Memorize the following words</h1>
    <div id="gameSpace"><div>
    `
    return div;
}
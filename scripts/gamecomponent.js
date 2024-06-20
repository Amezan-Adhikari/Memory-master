export function gameComponent(){
    let div = document.createElement("div");
    div.classList.add("mainGame");
    div.id = "mainGame";
    div.innerHTML = `
    <h1 id="heading" class="text-lg text-center my-5">Memorize the following words</h1>
    <div id="gameSpace" class="grid grid-cols-2 md:grid-cols-4 gap-4">
    </div>
    `
    return div;
}
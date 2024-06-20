export function timer(x){

    let timer = document.createElement("div")
    timer.classList.add("timer");
    timer.innerText = x;

    return timer;
}
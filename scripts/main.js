import { gameComponent } from "./gamecomponent.js";
import { getWords } from "./getwords.js";
import { createButton } from "./go.js";
import { state } from "./store.js";
import { timer } from "./timer.js";
import { createWords } from "./words.js";

let container = document.getElementById("container");

let button = createButton();
container.appendChild(button);
button.onclick = () => {
  state.gameStart = true;
  startGame();
  container.removeChild(button);
};

let wordsKey = [];
let timeCount ;
function startGame() {
  let div = gameComponent();
  container.appendChild(div);
  wordsKey = getWords(12);
  wordsKey.forEach((word) => {
    document.getElementById("gameSpace").appendChild(createWords(word));
  });

  let time = 20;
    timeCount = timer(time);
  div.appendChild(timeCount);
  setInterval(()=>{
      if(time<0)return
      div.removeChild(timeCount);
      timeCount = timer(time--);
      div.appendChild(timeCount);
  },1000)

  setTimeout(() => {
    document.getElementById("heading").innerText = "Guess the Words!"
    timeCount.classList.remove("timer");
    timeCount.innerHTML = `
        <input type="text" placeholder="Enter Word Here.." id="inputTab" class="h-10 mx-5 my-10 px-4 outline-none border-2 border-gray-400 rounded-lg focus:border-blue-400" id="h"></input>

        <br>
        <br>
        <br>
        <button class="p-3 px-5 text-center text-md bg-purple-800 mx-5 rounded-lg text-white hover:opacity-70 shadow-lg" id="submit">Submit</button>
        `;
    document.getElementById("gameSpace").innerHTML = "";
    document.getElementById("inputTab").addEventListener("input", (e) => {
        inputFunction(e);
      });
      document.getElementById("submit").addEventListener("click",(e)=>{
        submitData(e);
      })
    wordsKey.forEach((word) => {
      document.getElementById("gameSpace").appendChild(createWords(""));
    });
  },21000);
}


function inputFunction(e) {
  let guess = e.target.value;

  wordsKey.forEach((word,index) => {
    if (guess.toLowerCase() == word.toLowerCase()){

        document.getElementById("gameSpace").childNodes[index].innerText = word;
        document.getElementById("gameSpace").childNodes[index].classList.add("green")
        e.target.value = '';
    };
  });
}


function submitData(e){
    let correctGuess = 0;
    wordsKey.forEach((word,index) => {
 
            document.getElementById("gameSpace").childNodes[index].innerText = word;

            if(document.getElementById("gameSpace").childNodes[index].classList.contains("green")){
                document.getElementById("gameSpace").childNodes[index].classList.add("green");
                correctGuess++;
            }
            else{
                document.getElementById("gameSpace").childNodes[index].classList.add("red");
            }
            
            e.target.value = '';

      });

      timeCount.innerHTML = `
      <h1 class="text-center my-4"></h1>

            <h1 class="text-xl font-black text-center">${correctGuess}/12</h1>

<br><br>
    <button class="p-3 px-5 text-center text-md bg-purple-800 mx-5 rounded-lg text-white hover:opacity-70 shadow-lg" id="restart">Restart</button>
      `;

      document.getElementById("heading").innerText = "Great job :"

      document.getElementById("restart").addEventListener("click",restartGame);
}


function restartGame(){
    window.location.reload();
}



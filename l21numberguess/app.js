// UI

const minnum = document.querySelector(".minnumber"),
  maxnum = document.querySelector(".maxnumber"),
  getinput = document.querySelector("#guessnumber"),
  getbtn = document.querySelector("#btn"),
  message1 = document.querySelector(".message1"),
  message2 = document.querySelector(".message2"),
  getgameform = document.getElementById("gameform");

const getmicbtn = document.getElementById("mic-btn");
const getvocctn = document.getElementById("voice-container");

const min = 10,
  max = 20,
  winningnum = randomnum(min, max);
// winningnum = 5;
let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;

// DI ka nay sa pee code ka a lote ma lote top par buu kwal

// For Chrome Browser Support
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition();
// console.log(getrec);

getmicbtn.addEventListener("click", function () {
  // console.log(getrec);

  // start() default function from Recognition api
  getrec.start();

  getrec.addEventListener("result", (e) => talking(e));
});

function talking(ele) {
  console.log(ele);
  // console.log(ele.results[0][0].transcript);
  const micresult = ele.results[0][0].transcript;
  // console.log(micresult);

  micmessage(micresult);
  getnumber(micresult);
}

function micmessage(msg) {
  getvocctn.innerHTML = `<span>Did you say ${msg}</span>`;
}

function getnumber(msg) {
  const getnum = +msg;
  // console.log(typeof getnum);
  // console.log("abcd");
  if (Number.isNaN(getnum)) {
    getvocctn.innerHTML = `<div>This is not a valid number...</div>`;
    return false;
  }
  // console.log("efg");

  getinput.value = getnum;
  // stop() default function from SpeechRecognition api
  getrec.stop();
}

getbtn.addEventListener("click", function (e) {
  // console.log('hay i am working');
  // console.log(getinput.value);
  // console.log(typeof getinput.value); // String

  // getinput ko variable htae htae pee number datatype par change mal
  // let guess = Number(getinput.value);
  // let guess = +getinput.value;
  let guess = parseInt(getinput.value);
  // console.log(guess);
  // console.log(typeof guess);

  if (guess < min || guess > max || isNaN(guess)) {
    // console.log(`Please enter a number between ${min} to ${max}`);
    // message2.textContent = `Please enter a number between ${min} to ${max}...`;
    setmessage2(`Please enter a number between ${min} to ${max}`, "red");
  }

  if (guess === winningnum) {
    // Gameover Won
    // console.log("You Won");

    //disabled getinput
    // getinput.disabled = true;

    //getinput border color to green
    // getinput.style.borderColor = "green";

    // message1 color green
    // message1.textContent = `${winningnum} is correct!! You Won...`;
    // message1.style.color = 'green';
    // setmessage1(`${winningnum} is correct!! You Won...`,'green');

    // play again ?
    // getbtn.value = "Play Again";

    gameover(true, `${winningnum} is correct!! You Won...`);
  } else {
    // gameleft--;
    gameleft -= 1;

    if (gameleft === 0) {
      // Gameover LOSE

      //disabled getinput
      // getinput.disabled = true;

      //getinput border color to red
      // getinput.style.borderColor = "red";

      // message1 color red
      // message1.textContent = `You Lose Try Again.. Correct number is ${winningnum}`;
      // message1.style.color = 'red';
      // setmessage1(`You Lose Try Again.. Correct number is ${winningnum}`,'red');

      // play again ?
      // getbtn.value = "Play Again";

      gameover(
        false,
        `GameOver, You Lose :( The correct number is ${winningnum}`
      );
    } else {
      // Continue Game

      // getinput borderColor to red
      getinput.style.borderColor = "red";

      // message1
      message1.textContent = `${guess} is not correct... ${gameleft} guess left.`;
      message1.style.color = "blue";

      // clear getinput old value
      getinput.value = "";

      // autofocus getinput
      getinput.focus();
    }
  }

  // loading ma tat chin loa pay tar
  e.preventDefault();
});

function setmessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function gameover(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //disabled getinput
  getinput.disabled = true;

  //getinput border color to red or green
  getinput.style.borderColor = color;

  // message1 color red
  // message1.textContent = `You Lose Try Again.. Correct number is ${winningnum}`;
  // message1.style.color = 'red';
  setmessage1(msg, color);

  // play again ?
  getbtn.value = "Play Again";

  // Add Class
  // getbtn.className = 'btn playagain';
  getbtn.classList.add("playagain");
  // getbtn.className += ' playagain';
}

function setmessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;

  setTimeout(function () {
    message2.textContent = "";
  }, 2000);
}

getgameform.addEventListener("mousedown", function (e) {
  // console.log(e.target);

  // e.target.classList.contains('playagain');
  if (e.target.className === "btn playagain") {
    // console.log('i am working');

    // window ko reload lote yin pay ka tar
    window.location.reload();
  }
});

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + min);
  return getrdm;
}

// number a mhan ko ti chin yin
console.log(winningnum);

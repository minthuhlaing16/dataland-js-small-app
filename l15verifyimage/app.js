const database = [
  {
    question: "Choose Cycle ?",
    a: "../img/cycle.jpg",
    b: "../img/mountain.jpg",
    c: "../img/house.jpg",
    d: "../img/sun.jpg",
    correctanswer: "a",
  },
  {
    question: "Choose Mountain ?",
    a: "../img/sun.jpg",
    b: "../img/mountain.jpg",
    c: "../img/house.jpg",
    d: "../img/cycle.jpg",
    correctanswer: "b",
  },
  {
    question: "Choose Sun ?",
    a: "../img/cycle.jpg",
    b: "../img/mountain.jpg",
    c: "../img/sun.jpg",
    d: "../img/house.jpg",
    correctanswer: "c",
  },
  {
    question: "Choose House ?",
    a: "../img/house.jpg",
    b: "../img/mountain.jpg",
    c: "../img/cycle.jpg",
    d: "../img/sun.jpg",
    correctanswer: "a",
  },
];

// console.log(database);
// console.log(database[0]);
// console.log(database[0].b);

const getcontainer = document.querySelector(".container");

const getquestion = document.querySelector(".question");

const getinputs = document.querySelectorAll(".answer"); // Nodelist

// console.log(getcontainer);
// console.log(getquestion);
// console.log(getinputs);

const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");

const getbtn = document.querySelector(".btn");

let currentidx = 0;

let score = 0;

function startquestion() {
  removeselected();
  const currentques = database[currentidx];

  getquestion.textContent = currentques.question;
  geta_img.src = currentques.a;
  getb_img.src = currentques.b;
  getc_img.src = currentques.c;
  getd_img.src = currentques.d;
}

startquestion();

function getsingleinput() {
  let answer;

  getinputs.forEach(function (getinput) {
    // console.log(getinput);

    if (getinput.checked) {
      //   console.log(getinput.id);
      answer = getinput.id;
    }
  });

  return answer;
}

getbtn.addEventListener("click", function () {
  //   console.log("i am working");

  const getanswer = getsingleinput();

  //   console.log(getanswer);

  if (getanswer) {
    // question 0;
    // currentidx 0;

    if (getanswer === database[currentidx].correctanswer) {
      score++;
    }
    currentidx++;

    // console.log(currentidx);

    // 0 1 2 3 < 4
    if (currentidx < database.length) {
      startquestion();
    } else {
      // console.log(score);
      getcontainer.innerHTML = `
      <h3>Total score : ${score * 25} </h3>
      <h4>Your answered correctly at ${score}/${database.length} questions.</h4>
      <button type="button" class="btn" ondblclick="window.location.reload();">Double Click to Reload</button>
      <button type="button" class="btn" onclick="doubleclick()">Double Click next method</button>
      `;
    }
  } else {
    alert("Choose one answer!!!");
  }
});

function removeselected() {
  getinputs.forEach(function (getinput) {
    return (getinput.checked = false);
  });
}

// double click nout ta nii

let clicktimes = 0;
function doubleclick() {
  // console.log(clicktimes);

  if (clicktimes === 0) {
    clicktimes = Date.now();
    console.log(clicktimes);
  } else {
    if (Date.now() - clicktimes < 1000) {
      window.location.reload();
      clicktimes = 0;
    } else {
      clicktimes = Date.now();
    }
  }
}

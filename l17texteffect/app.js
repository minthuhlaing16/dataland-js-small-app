const languages = ["NodeJs", "ReactJs", "VueJs", "Laravel"];

const colors = ["red", "skyblue", "violet", "yellow"];

const gettxtani = document.querySelector(".txtani");

const gettxtlights = document.querySelectorAll(".text-light");

// console.log(languages[0]); // give index take value

// console.log(languages[2]);

// console.log(languages.indexOf("ReactJs")); // give value take index

// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf("NodeJs")]); // red
// console.log(colors[languages.indexOf("VueJs")]); // violet

// return 0 to 3

function* generator() {
  var idx = 0;

  while (true) {
    yield idx++;
    if (idx > 3) {
      idx = 0;
    }
  }
}

const genfun = generator();

// console.log(genfun.next()); // { value: 0, done: false }

// console.log(genfun.next().value); // 0
// console.log(genfun.next().value); // 1
// console.log(genfun.next().value); // 2
// console.log(genfun.next().value); // 3
// console.log(genfun.next().value); // 0
// console.log(genfun.next().value); // 1

// console.log(languages[genfun.next().value]); // NodeJs
// console.log(languages[genfun.next().value]); // ReactJs
// console.log(languages[genfun.next().value]); // VueJs
// console.log(languages[genfun.next().value]); // Laravel
// console.log(languages[genfun.next().value]); // NodeJs

showwords(languages[genfun.next().value]); // showwords("NodeJs");

function showwords(word) {
  //   console.log(word);
  //   console.log(word[0]);

  let x = 0;
  gettxtani.innerHTML = "";
  gettxtani.classList.add(colors[languages.indexOf(word)]);
  //   gettxtani.innerHTML = word;
  //   gettxtani.innerHTML = word[0]; // N
  //   gettxtani.innerHTML += word[1]; // No
  //   gettxtani.innerHTML += word[2]; // Nod

  let showinterval = setInterval(() => {
    // gettxtani.innerHTML += word[x];
    // x++;

    if (x >= word.length) {
      clearInterval(showinterval);
      deletewords();
    } else {
      gettxtani.innerHTML += word[x];
      x++;
    }
  }, 200);
}

function deletewords() {
  let getword = gettxtani.innerHTML;
  // console.log(getword);

  let getlastidx = getword.length - 1;
  // console.log(getlastidx);

  let delinterval = setInterval(function () {
    if (getlastidx >= 0) {
      gettxtani.innerHTML = gettxtani.innerHTML.substring(
        0,
        gettxtani.innerHTML.length - 1
      );
      getlastidx--;
    } else {
      // remove old color
      gettxtani.classList.remove(colors[languages.indexOf(getword)]);

      // get new language
      showwords(languages[genfun.next().value]);
      clearInterval(delinterval);
    }
  }, 200);
}

gettxtlights.forEach(function (gettxtlight) {
  // console.log(gettxtlight);

  let arrtexts = gettxtlight.textContent.split("");
  // console.log(arrtexts);

  gettxtlight.textContent = "";

  arrtexts.forEach(function (arrtext, idx) {
    // console.log(arrtext);

    let newem = document.createElement("em");

    newem.textContent = arrtext;
    // console.log(newem);
    newem.style.animationDelay = `${idx * 0.1}s`;

    gettxtlight.appendChild(newem);
  });
});

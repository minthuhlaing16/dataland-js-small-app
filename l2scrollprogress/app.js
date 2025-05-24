const progressbar = document.getElementById("progress-bar");

window.onscroll = function () {
  scrollpoint();
};

function scrollpoint() {
  const getscrolltop = document.documentElement.scrollTop;
  // console.log(getscrolltop);

  const getclientheight = document.documentElement.clientHeight;
  // console.log(getclientheight);

  const scrollheight = document.documentElement.scrollHeight;

  const calheight = scrollheight - getclientheight;
  // console.log(calheight);

  const final = Math.floor((getscrolltop / calheight) * 100);
  // console.log(final);

  progressbar.style.width = `${final}%`;
}

function printme() {
  // console.log("print me");
  window.print(); // print() is default function. which mean already include in javascript
}

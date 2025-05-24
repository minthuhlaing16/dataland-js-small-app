const getacctitles = document.getElementsByClassName("acctitle");
const getacccontents = document.querySelectorAll(".acccontent");

// console.log(getacctitles); // HTMLCollection
// console.log(getacccontents); // Nodelist
// console.log(getacccontents.length); // 4
// console.log(getacccontents[0]); // index number

for (let x = 0; x < getacctitles.length; x++) {
  console.log(x); // 0 to 3

  getacctitles[x].addEventListener("click", function (e) {
    // console.log(x); // clicked element idx
    // console.log(getacctitles[x]); // <h1 class="acctitle">
    // console.log(e.target); // <h1 class="acctitle">
    // console.log(this); // <h1 class="acctitle"> this is regular function phit loa a lote phit tar arrow function mar so yin a lote ma phit buu

    // e.target.classList.toggle("active");
    this.classList.toggle("active");

    // acctitle acccontent
    const getcontent = this.nextElementSibling;

    // console.log(getcontent); // <div class="acccontent">

    // console.log(getcontent.scrollHeight); // 142 and 284

    if (getcontent.style.height) {
      getcontent.style.height = null; // be aware can't set 0
    } else {
      getcontent.style.height = getcontent.scrollHeight + "px";
    }
  });

  if (getacctitles[x].classList.contains("active")) {
    getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
  }
}

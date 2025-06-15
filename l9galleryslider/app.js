const getmodal = document.querySelector(".modal");

const getmodalimg = document.querySelector(".modal-img");

const getcaption = document.querySelector(".caption");

const getbtnclose = document.querySelector(".btn-close");

function shownow(e) {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.src);
  //   console.log(e.target.alt);

  getmodal.style.display = "block";
  getmodalimg.src = e.target.src;
  getcaption.textContent = e.target.alt;
}

// di lol lae yay loa ya tal

// getbtnclose.addEventListener("click", function () {
//   getmodal.style.display = "none";
// });

getbtnclose.onclick = function () {
  getmodal.style.display = "none";
};

document.addEventListener("click", function (e) {
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
});

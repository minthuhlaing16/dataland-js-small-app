let gettablinks = document.getElementsByClassName("tablinks"),
  gettabpanels = document.getElementsByClassName("tab-panel"),
  getbtnclose = document.querySelectorAll(".btn-close");

// console.log(gettabpanels); // htmlcollection phit nay loa array pyaung mal

let tabpanels = Array.from(gettabpanels);

// console.log(tabpanels); // Array phit twar p

// onclick nae so e so pee function mar event auto ma pay buu html onclick mar event so pee pay mha function ka nay e keyword nae pyan khaw loa ya tal

function gettab(e, link) {
  //   console.log("home click");
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(link);

  // Remove all Active

  for (let x = 0; x < gettablinks.length; x++) {
    // console.log(x);

    gettablinks[x].className = gettablinks[x].className.replace(" active", "");

    // hide tabpanel by btn-close
    getbtnclose[x].addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }

  // Add single active
  //   e.target.className = "tablinks active";
  //   e.target.className += " active";
  //   e.currentTarget.className += " active";

  //   e.target.className = e.target.className.replace(
  //     "tablinks",
  //     "tablinks active"
  //   );

  e.target.classList.add("active");

  // Hide all panel
  tabpanels.forEach(function (tabpanel) {
    tabpanel.style.display = "none";
  });
  // show single panel
  document.getElementById(link).style.display = "block";
}

// 0ut ka code ka ma lol att buu san kyi tar
// function gettab(e) {
//   console.log(e.target.innerText.toLowerCase());
// }

// sa lar tar nae home ko active phit say chin tar

document.getElementById("autoclick").click();

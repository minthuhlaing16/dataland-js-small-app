const getinput = document.getElementById("search");

let getsortazm1btn = document.getElementById("sortazm1"),
  getsortzam1btn = document.getElementById("sortzam1"),
  getsortazm2btn = document.getElementById("sortazm2"),
  getsortzam2btn = document.getElementById("sortzam2");

const getul = document.getElementById("members");

const getlis = getul.getElementsByTagName("li");

// console.log(getul);
// console.log(getlis); html collection
// console.log(getlis[0]);

getinput.addEventListener("keyup", filter);

getsortazm1btn.addEventListener("click", sortingazm1);
getsortzam1btn.addEventListener("click", sortingzam1);

function filter() {
  const filter = this.value.toLowerCase();
  //   console.log(filter);

  for (let x = 0; x < getlis.length; x++) {
    // console.log(x); // 0 to 58
    // getlink = getlis[x].getElementsByTagName("a"); // htmlcollection
    // getlink = getlis[x].getElementsByTagName("a")[0];
    getlink = getlis[x].querySelector("a");
    // console.log(getlink);

    // const getatext = getlink.textContent;
    // const getatext = getlink.innerText;
    const getatext = getlink.textContent || getlink.innerText;
    // console.log(getatext);
    // console.log(getatext.toLowerCase());

    if (getatext.toLowerCase().indexOf(filter) > -1) {
      getlis[x].style.display = "";
    } else {
      getlis[x].style.display = "none";
    }
  }
}

// Method 1 sorting a to z

function sortingazm1() {
  //   console.log("A to Z Method 1");

  let lis = [];

  for (let i = 0; i < getlis.length; i++) {
    // console.log(getlis[i]);
    // console.log(getlis[i].innerHTML);
    // console.log(getlis[i].textContent);

    lis.push(getlis[i].textContent);
  }
  //   console.log(lis);
  //   console.log(lis.sort());
  //   console.log(lis.reverse());
  //   console.log(lis.sort().reverse());

  const azresults = lis.sort();
  //   console.log(azresults);

  getul.innerHTML = "";

  azresults.forEach(function (azresult) {
    // console.log(azresult);

    const newli = document.createElement("li");
    // console.log(newli);
    const newlink = document.createElement("a");
    // console.log(newlink);
    newlink.href = "javascript:void(0);";
    newlink.appendChild(document.createTextNode(azresult));

    newli.appendChild(newlink);

    // console.log(newlink);

    getul.appendChild(newli);
  });
}

// Method 1 sorting z to a

function sortingzam1() {
  //   console.log("Z to A Method 1");

  let lis = [];

  for (let i = 0; i < getlis.length; i++) {
    // console.log(getlis[i]);
    // console.log(getlis[i].innerHTML);
    // console.log(getlis[i].textContent);

    lis.push(getlis[i].textContent);
  }
  //   console.log(lis);
  //   console.log(lis.sort());
  //   console.log(lis.reverse());
  //   console.log(lis.sort().reverse());

  const azresults = lis.sort().reverse();
  //   console.log(azresults);

  getul.innerHTML = "";

  azresults.forEach(function (azresult) {
    // console.log(azresult);

    const newli = document.createElement("li");
    // console.log(newli);
    const newlink = document.createElement("a");
    // console.log(newlink);
    newlink.href = "javascript:void(0);";
    newlink.appendChild(document.createTextNode(azresult));

    newli.appendChild(newlink);

    // console.log(newlink);

    getul.appendChild(newli);
  });
}

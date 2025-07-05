const getcurrmonth = document.getElementById("currmonth");
const getcurryear = document.getElementById("curryear");
const getcaldays = document.getElementById("caldays");
const getuimonths = document.getElementById("months");
const getuiyears = document.getElementById("years");
const getyearbtn = document.querySelector(".year-btn");
const getmonthbtn = document.querySelector(".month-btn");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let startyear = 2020;
let endyear = 2030;

let month, year;

window.addEventListener("load", function () {
  // console.log("hey i am working");
  let getday = new Date();
  month = getday.getMonth();
  year = getday.getFullYear();
  // console.log(month);
  // console.log(year);

  getcurrmonth.textContent = months[month];
  getcurryear.textContent = year;
  initmonths();
  inityears();
  initdays();
});

function initmonths() {
  // console.log("I am month");
  getuimonths.innerHTML = "";

  for (let x = 0; x < months.length; x++) {
    // console.log(x);
    const newdiv = document.createElement("div");
    newdiv.textContent = months[x];
    newdiv.classList.add("dropdown-item");

    newdiv.addEventListener("click", function () {
      // ==> Method 1
      // console.log(x); // current month index
      // console.log(months[x]);
      // month = x;
      // getcurrmonth.textContent = months[x];
      // initdays();
      // ==> Method 2
      // console.log(this);
      // console.log(this.textContent);
      // month = months.indexOf(this.textContent);
      // console.log(month);
      // getcurrmonth.textContent = months[month];
      // initdays();
    });

    // ==> Method 3
    newdiv.onclick = updatedaysbymonth(x);

    // console.log(newdiv);
    getuimonths.appendChild(newdiv);
  }
}

function updatedaysbymonth(idx) {
  // console.log(idx); // 0 to 11

  let selectmonth = idx;
  return function () {
    month = selectmonth;
    // console.log(month);
    getcurrmonth.textContent = months[month];
    initdays();
  };
}

function inityears() {
  // console.log("i am year");
  getuiyears.innerHTML = "";
  for (let x = startyear; x <= endyear; x++) {
    // console.log(x);

    const newdiv = document.createElement("div");
    newdiv.textContent = x;
    newdiv.classList.add("dropdown-item");

    // newdiv.addEventListener("click", function () {
    //   // METHOD --> 1
    //   // console.log(x);
    //   // year = x;
    //   // getcurryear.textContent = year;
    //   // initdays();

    //   // METHOD --> 2
    //   console.log(this);
    //   console.log(this.textContent);
    //   year = this.textContent;
    //   getcurryear.textContent = year;
    //   initdays();
    // });

    // Method --> 3
    // newdiv.onclick = () => {
    //   // console.log(x);
    //   year = x;
    //   getcurryear.textContent = year;
    //   initdays();
    // };

    // ==> Method --> 5
    // self invoking function
    newdiv.onclick = (function () {
      console.log(x);

      let selectyear = x;
      console.log(selectyear);

      return function () {
        year = selectyear;
        console.log(year);
        getcurryear.textContent = year;
        initdays();
      };
    })();

    // console.log(newdiv);
    getuiyears.appendChild(newdiv);
  }
}

function initdays() {
  // console.log("I am day");
  getcaldays.innerHTML = "";

  let tmpdays = new Date(year, month, 0);
  let getalldays = alldays(year, month);
  // console.log(getalldays);
  let getprevendday = tmpdays.getDay();
  // console.log(getprevendday);

  for (let x = 0; x <= getprevendday; x++) {
    // console.log(x);

    let newlabel = document.createElement("label");
    newlabel.className = "day blank";
    // console.log(newlabel);

    getcaldays.appendChild(newlabel);
  }

  for (let y = 0; y < getalldays; y++) {
    let eachday = y + 1;
    let newlabel = document.createElement("label");
    newlabel.textContent = eachday;
    newlabel.classList.add("day");

    // console.log(newlabel);

    getcaldays.appendChild(newlabel);
  }

  // console.log(tmpdays);
}
function alldays(year, month) {
  // console.log(year, month);

  let curralldays = new Date(year, month + 1, 0);
  // console.log(curralldays);

  curralldays = curralldays.getDate();
  // console.log(curralldays);
  return curralldays;
}

// Jquery nae lae yay loa ya tal month ko

// getmonthbtn.addEventListener("click", function () {
//   if (this.lastElementChild.classList.contains("show")) {
//     this.lastElementChild.classList.remove("show");
//   } else {
//     this.lastElementChild.classList.add("show");
//   }
// });

getyearbtn.addEventListener("click", function () {
  if (this.lastElementChild.classList.contains("show")) {
    this.lastElementChild.classList.remove("show");
  } else {
    this.lastElementChild.classList.add("show");
  }
});

// console.log(new Date()); // Sun Jun 29 2025 21:22:12 GMT+0630 (Myanmar Time)

// console.log(new Date(2023, 1, 10)); // Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)

// console.log(new Date(2023, 0, 0)); // Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)

// console.log(new Date(2023, 5, 0)); // Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)

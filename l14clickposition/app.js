let getsmallcolor = document.getElementById("smallcolor"),
  getmediumcolor = document.getElementById("mediumcolor"),
  getlargecolor = document.getElementById("largecolor");

const getmap = document.querySelector(".map-container");

var circleidx = 0;

getmap.addEventListener("click", function (e) {
  //   console.log("I am working");
  //   console.log(e.target);

  circleidx++;
  //   console.log(circleidx);

  if (e.target.classList.contains("map-container")) {
    // console.log("yes, I am in map area");

    const offx = e.offsetX;
    const offy = e.offsetY;

    // console.log(offx, offy);

    const newspan = document.createElement("span");
    newspan.classList.add("circle");
    newspan.id = circleidx;

    newspan.style.left = `${offx}px`;
    newspan.style.top = `${offy}px`;

    // console.log(newspan);

    if (
      getsmallcolor.selectedIndex > 0 &&
      getmediumcolor.selectedIndex > 0 &&
      getlargecolor.selectedIndex > 0
    ) {
      newspan.style.setProperty("--small-color", getsmallcolor.value);
      newspan.style.setProperty("--medium-color", getmediumcolor.value);
      newspan.style.setProperty("--large-color", getlargecolor.value);
    }

    this.appendChild(newspan);
  }
});

const getimageboxs = document.querySelectorAll(".imgbox");

// console.log(getimageboxs); // NodeList for each nae looping

getimageboxs.forEach(function (getimagebox, idx) {
  //   console.log(getimagebox);
  //   console.log(idx);

  getimagebox.addEventListener("click", function () {
    // console.log(this);
    // console.log(idx);
    showbox(idx);
  });
});

function showbox(idx) {
  //   console.log("from parameter ", idx);

  getimageboxs.forEach(function (imagebox, curridx) {
    // console.log("Current idx ", curridx);

    if (idx === curridx) {
      imagebox.classList.add("show");

      imagebox.addEventListener("click", function (e) {
        // console.log(e.target);

        if (e.target.className === "btn-close") {
          //   console.log("hu");

          imagebox.classList.remove("show");
        }

        if (e.target.classList.contains("btn")) {
          //   console.log("hay");

          //   const getsubbtn = imagebox.querySelector(".btn");

          const getsubbtn = getimageboxs[idx].querySelector(".btn");
          getsubbtn.textContent = "Subscribed";
        }
      });
    } else {
      imagebox.classList.remove("show");
    }
  });
}

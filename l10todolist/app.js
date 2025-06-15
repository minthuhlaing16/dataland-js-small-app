const getform = document.getElementById("form");

const gettextbox = document.getElementById("textbox");

const getul = document.getElementById("list-group");

getform.addEventListener("submit", (e) => {
  //   console.log("hay");

  addnew();

  e.preventDefault();
});

const getlocaldbs = JSON.parse(localStorage.getItem("todos"));
// console.log(getlocaldbs);
if (getlocaldbs) {
  getlocaldbs.forEach((getlocaldb) => addnew(getlocaldb));
}

function addnew(todo) {
  let todotext = gettextbox.value;
  //   console.log(todotext);

  if (todo) {
    todotext = todo.text;
  }

  if (todotext) {
    const newli = document.createElement("li");

    if (todo && todo.done) {
      newli.classList.add("completed");
    }

    newli.appendChild(document.createTextNode(todotext));
    // console.log(newli.childNodes[0].data);

    getul.appendChild(newli);
    gettextbox.value = "";
    gettextbox.focus();

    updatelocalstorage();

    newli.addEventListener("click", function () {
      newli.classList.toggle("completed");
      updatelocalstorage();
    });

    newli.addEventListener("contextmenu", function (e) {
      //   console.log("hello");

      //   newli.remove();
      this.remove();
      updatelocalstorage();

      e.preventDefault();
    });
  }
}

// database
function updatelocalstorage() {
  let getalllis = document.querySelectorAll("li");
  //   console.log(getalllis);

  const todos = [];

  getalllis.forEach((getallli) => {
    // console.log(getallli.textContent);

    todos.push({
      text: getallli.textContent,
      done: getallli.classList.contains("completed"), // true or false
    });
  });

  console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
}

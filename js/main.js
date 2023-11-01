let input = document.getElementById("input");
let searched = document.getElementById("recentResearches");
let resultBox = document.getElementById("resultBox");
let resultTitle = document.getElementsByClassName("result-title")[0];
let list = document.getElementById("list");
let title = document.getElementById("title");
let rateScore = document.getElementById("rateScore");
let note = document.getElementById("note");
let check = false;
var items = 0;
var removeBtns = document.querySelectorAll("#list button");

let updatedContent = list.innerHTML;

input.addEventListener("keyup", function (e) {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    search();
  }
});

function search() {
  if (check) {
    document.getElementById("reasultSearch").remove();
  }

  searched.remove();
  resultTitle.innerHTML = "Result :";

  var container = document.createElement("div");
  var divRow = document.createElement("div");

  container.classList.add("container");
  container.id = "reasultSearch";
  divRow.classList.add("row");

  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${input.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c57d428066msh0c0924c31458087p19ab57jsnbba6e6cac10b",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) return response.json();
      else alert("This City not exist");
    })

    .then((data) => {
      for (var i = 0; i < 4; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var title = document.createElement("h3");
        var button = document.createElement("button");

        div.classList.add("col-lg-3");
        div.classList.add("col-md-4");
        div.classList.add("col-sm-12");
        div.classList.add("text-center");
        div.classList.add("mb-5");
        img.classList.add("img-fluid");
        title.classList.add("mt-3");
        title.classList.add("mb-3");

        title.innerHTML = data["d"][i]["l"];
        button.innerHTML = "Add Item";

        img.src = data["d"][i]["i"]["imageUrl"];

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(button);

        divRow.appendChild(div);
        container.appendChild(divRow);
        resultBox.append(container);
      }

      let buttons = document.querySelectorAll("#resultBox button");
      // let kaka = document.querySelectorAll("#resultBox .row div");

      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          document.getElementById("rate").style.display = "block";
          items++;

          document.getElementById("title").innerHTML =
            button.parentElement.childNodes[1].innerHTML;
          document.getElementById("saveItem").onclick = function () {
            var itemDiv = document.createElement("div");
            var itemImg = document.createElement("img");
            var titleDiv = document.createElement("div");
            var titleElement = document.createElement("h5");
            var rateDiv = document.createElement("div");
            var rateElement = document.createElement("h5");
            var noteDiv = document.createElement("div");
            var noteElement = document.createElement("p");
            var deleteBtn = document.createElement("button");

            itemImg.src = button.parentElement.childNodes[0].src;
            titleElement.innerHTML =
              button.parentElement.childNodes[1].innerHTML;
            rateElement.innerHTML = rateScore.value;
            noteElement.innerHTML = note.value;
            deleteBtn.innerHTML = "delete";
            deleteBtn.id = `btn${items}`;

            titleDiv.appendChild(titleElement);
            rateDiv.appendChild(rateElement);
            noteDiv.appendChild(noteElement);

            itemDiv.classList.add("item");
            itemDiv.id = `item${items}`;
            itemDiv.appendChild(itemImg);
            itemDiv.appendChild(titleDiv);
            itemDiv.appendChild(rateDiv);
            itemDiv.appendChild(noteDiv);
            itemDiv.appendChild(deleteBtn);

            list.appendChild(itemDiv);

            document.getElementById("rate").style.display = "none";

            removeBtns = document.querySelectorAll("#list button");

            removeBtns.forEach((button) => {
              button.addEventListener("click", function () {
                button.parentElement.remove();
                updatedContent = list.innerHTML;
                localStorage.setItem("divContent", updatedContent);
              });
            });
            updatedContent = list.innerHTML;
            localStorage.setItem("divContent", updatedContent);
          };
          rateScore.value = "";
          note.value = "";
        });
      });
    });

  check = true;
  // saveData();
}

const storedContent = localStorage.getItem("divContent");

list.innerHTML = storedContent;

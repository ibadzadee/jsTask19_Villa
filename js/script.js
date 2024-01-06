// -----------------Menu ---------------
const menu = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

menu.addEventListener("click", () => {
  const currentBgColor = navbar.style.backgroundColor;

  if (
    !currentBgColor ||
    currentBgColor === "transparent" ||
    currentBgColor === "rgba(0, 0, 0, 0)"
  ) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "tr ansparent";
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav.classList.add("position-sticky");
    nav.style.top = "0px";
    nav.style.zIndex = "99999px";
    nav.style.left = "0px";
    nav.style.background = "#e61c5d";
    nav.style.opacity = "0.8";
    nav.style.padding = "1px 0px";
  } 
  else {
    nav.classList.remove("position-sticky");
    nav.classList.add("position-absolute");
    nav.style.background = "";
    nav.style.opacity = "";
    nav.style.padding = "";
  }
});

// <!--------------------From end to top btn----------------------->
topBtn = document.querySelector("#top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.scale = "1";
  } else {
    topBtn.style.scale = "";
  }
});

topBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// ----------Data.json------
let url = `http://localhost:3000/data/`;
const section = document.querySelector("#blog .bottom");
let page = 1;

function ShowData() {
  fetch(`http://localhost:3000/data?_page=${page}&_limit=3`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        section.innerHTML += `
    <div class="cards">
    <div class="img">
      <img src="${element.image}" alt="" />
    </div>
    <div class="text">
      <p>${element.date}</p>
      <h3>${element.name}</h3>
      <div class="crud">
        <div class="edit">
          <i class="bi bi-trash3-fill delete" onclick="deleteElement(${element.id})"></i>
          <i class="bi bi-pencil-square edit" onclick="update(${element.id})"></i>
          <button id="details" onclick="details(${element.id})">View  Details</button>
        </div>
        <i class="bi bi-heart heart" onclick="addFav(${element.id})"></i>
      </div>
    </div>
  </div>
    `;
      })
    );
}

// --------------------LoadMore--------------------
ShowData();
const loadBtn = document.querySelector("#loadMore");
loadBtn.addEventListener("click", () => {
  page++;
  ShowData();
});

// -----------------------delete------------------------
function deleteElement(id) {
  axios.delete(url + id);
  window.location.reload();
}

// -----------------------addFav------------------
function addFav(id) {
  axios.get(url + id).then((res) => {
    console.log(res.data);
    axios.post(`http://localhost:3000/favorite`, res.data);
    axios.post(`../favorite.html`, res.data);
  });
}

// -----------------------Details------------------------
function details(id) {
  window.location = `./details.html?id=${id}`;
}

// -----------------------Update------------------------
function update(id) {
  window.location = `update.html?id=${id}`;
}

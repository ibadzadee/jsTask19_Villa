const id = new URLSearchParams(window.location.search).get("id");
let url = `http://localhost:3000/data/`;

const section = document.querySelector(".form");
const form = document.querySelector("#form");
const img = document.querySelector("#image");
const imageInp = document.querySelector("#img");
const dateInp = document.querySelector("#date");
const nameInp = document.querySelector("#name");

fetch(url + id)
  .then((data) => data.json())
  .then((element) => {
    (img.src = element.image),
      (dateInp.value = element.date),
      (nameInp.value = element.name);
  });
imageInp.addEventListener("input", (e) => {
  let selectedFile = e.target.files[0];
  if (selectedFile) {
    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = function () {
      img.src = reader.result;
    };
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios.put(url + id, {
      image: img.src,
      date: dateInp.value,
      name: nameInp.value,
    })
    .then((res) => {
      window.location = "./index.html";
    });
});

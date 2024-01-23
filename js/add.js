const id = new URLSearchParams(window.location.search).get("id");
let url = `http://localhost:3000/data/`;

const section = document.querySelector(".form");
const form = document.querySelector("#form");
const imageInp = document.querySelector("#img");
const dateInp = document.querySelector("#date");
const nameInp = document.querySelector("#name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs = [dateInp, nameInp , imageInp];
  console.log(inputs.value);

  if (dateInp.value.trim() && nameInp.value.trim()) {
    let src = imageInp.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = (e) => {
      let obj = {
        image: e.target.result,
        date: dateInp.value,
        name: nameInp.value,
      };
      axios.post(url, obj).then((res) => {
        window.location = `./index.html`;
      });
    };
  } else {
    inputs.forEach((element) => {
      let display = element.value.trim() == "" ? "block" : "none";
      element.nextElementSibling.style.display = display;
    });
  }
});



const id = new URLSearchParams(window.location.search).get("id");
let url = `http://localhost:3000/data/`;

const section = document.querySelector("#blog .bottom")

fetch(url+id)
.then(data =>data.json())
.then(element =>{
    console.log(element.name);
    section.innerHTML += `
    <div class="cards">
    <div class="img">
      <img src="${element.image}" alt="" />
    </div>
    <div class="text">
      <p>${element.date}</p>
      <h3>${element.name}</h3>
    </div>
  </div>
    `
})
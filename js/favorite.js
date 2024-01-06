const id = new URLSearchParams(window.location.search).get("id");
let url = `http://localhost:3000/favorite/`;
const section = document.querySelector("#blog .bottom")


axios.get(url)
.then(res =>{
    res.data.forEach(element => {
        section.innerHTML+=`
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
            </div>
          </div>
        </div>
      </div>
        `;
    })
}
)

function deleteElement(id){
    axios.delete(url+id);
    window.location.reload();
}
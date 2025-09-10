const watches = [
  {
    id: 1,
    title: "Fastrack Vyb Maverick Quartz",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Titan",
  },
  {
    id: 2,
    title: "Fastrack Marvellous FX2 Unisex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Titan",
  },
  {
    id: 3,
    title: "boAt Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Boat",
  },
  {
    id: 4,
    title: "Sonata Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Sonata",
  },
  {
    id: 5,
    title: "Noise Noise Storm Infinity Smartwatch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis",
    price: 2345,
    stock: 10,
    brand: "Noise",
  },
];

function setWatchestoLocal(data) {
  localStorage.setItem("watches63", JSON.stringify(data));
}

function getWatchesFromLocal() {
  return JSON.parse(localStorage.getItem("watches63"));
}

const reanderCardElmt = document.querySelector("#renderCard");
searchElmt = document.querySelector("#searchInput");

function searchProducts() {
  console.log("clicked");
  searchWord = searchElmt.value;
  console.log(searchWord);
  let renderProductsArray = watches.filter((p) =>
    p.title.toLowerCase().includes(searchWord)
  );
  renderProducts(renderProductsArray);
}

function deleteWatch(ID){
  console.log(ID, "******ID*****")
  dataFromLocal = getWatchesFromLocal()
  const index = dataFromLocal.findIndex((w)=> w.id == ID)
  console.log(index,"*****INDEX********")
  if(index == -1){
    alert("Product not found")
  }else{
    dataFromLocal.splice(index, 1)
    console.log(dataFromLocal)
    setWatchestoLocal(dataFromLocal)
    renderProducts(dataFromLocal)
  }
}
function updateWatch(i){
  console.log(i)
  dataFromLocal = getWatchesFromLocal()
  document.querySelector('#editName').value = dataFromLocal[i].title
  document.querySelector('#editDescription').value = dataFromLocal[i].description
  document.querySelector('#editPrice').value = dataFromLocal[i].price
  document.querySelector('#editStock').value = dataFromLocal[i].stock


document.querySelector('#updateWatchData').addEventListener('click', 
  ()=>{
    dataFromLocal[i].title =  document.querySelector('#editName').value
    dataFromLocal[i].description =  document.querySelector('#editDescription').value
    dataFromLocal[i].price = document.querySelector('#editPrice').value
    dataFromLocal[i].stock =  document.querySelector('#editStock').value
    setWatchestoLocal(dataFromLocal)
    renderProducts(dataFromLocal)
bootstrap.Modal.getInstance(document.getElementById('editWatchModal')).hide();
  }
)
  


}

function renderProducts(renderProd) {
  reanderCardElmt.innerHTML = renderProd
    .map(
      (w, i) => `
    <div class="col-sm-12 col-md-6 col-lg-3 mb-2">
    <div class="card cardImage">
      <div class="card-body ">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Stock:${w.stock}</p>
        <p class="card-text">Price:${w.price}</p>
        <button class="btn btn-success" onclick=updateWatch('${i}') data-bs-toggle="modal" data-bs-target="#editWatchModal">Edit</button>
        <button class="btn btn-danger" onclick="deleteWatch('${w.id}')">Delete</button>
        <button class="btn btn-warning">Add to Cart</button>
      </div>
    </div>
  </div> 
`
    )
    .join("");
}

function renderByBrandName(brnd) {
  console.log(brnd);
  arrayByBrandName = watches.filter((p) => p.brand == brnd);

  renderProducts(arrayByBrandName);
}

// brand render in dropdown
let brands = new Set(watches.map((p) => p.brand));
b1 = Array.from(brands);
console.log(b1);

function renderBrand() {
  document.querySelector("#rendeBrands").innerHTML = watches
    .map(
      (p) => `
    <li><button class="dropdown-item" onclick="renderByBrandName('${p.brand}')">${p.brand}</button></li>

`
    )
    .join("");

  // document.querySelector('#rendeBrands').innerHTML = brands.map((b)=>`
  //     <li><button class="dropdown-item" onclick="renderByBrandName('${b}')">${b}</button></li>

  // `)
}

titleElmt = document.querySelector("#title");
descriptionElmt = document.querySelector("#description");
brandElmt = document.querySelector("#brand");
priceElmt = document.querySelector("#price");
stockElmt = document.querySelector("#stock");

function addNewProduct() {
  newWatch = {
    id: Date.now(),
    title: titleElmt.value,
    description: descriptionElmt.value,
    price: priceElmt.value,
    stock: stockElmt.value,
    brand: brandElmt.value,
  };
  console.log(newWatch);
  watchesFromLocal = getWatchesFromLocal();

  watchesFromLocal.push(newWatch);
  setWatchestoLocal(watchesFromLocal);
  window.location.href = './index.html'
  // renderProducts(watches)
}

window.addEventListener("DOMContentLoaded", () => {
  // setWatchestoLocal(watches);
  dataFromLocal = getWatchesFromLocal();
  if (!dataFromLocal) {
      setWatchestoLocal(watches)
  }
    if (reanderCardElmt) {

      renderProducts(dataFromLocal);
      renderBrand();
    }
  
});

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
  }
];

reanderCardElmt = document.querySelector("#renderCard");
searchElmt = document.querySelector("#searchInput")

function searchProducts(){
  console.log("clicked")
    searchWord = searchElmt.value
    console.log(searchWord)
    let renderProductsArray = watches.filter((p)=>p.title.toLowerCase().includes(searchWord))
    renderProducts(renderProductsArray)
}


function renderProducts(renderProd){

reanderCardElmt.innerHTML = renderProd
  .map(
    (w, i) => `
    <div class="col-sm-12 col-md-6 col-lg-3 mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Stock:${w.stock}</p>
        <p class="card-text">Price:${w.price}</p>
        <button class="btn btn-primary">View More</button>
      </div>
    </div>
  </div> 
`
  )
  .join("");
}

renderProducts(watches)

function renderByBrandName(brnd){
  console.log(brnd)
  arrayByBrandName = watches.filter((p)=> p.brand == brnd)

  renderProducts(arrayByBrandName)

}



// brand render in dropdown 
let brands = new Set(watches.map((p)=>p.brand))
console.log(brands)

function renderBrand (){
document.querySelector('#rendeBrands').innerHTML = watches.map((p)=>`
    <li><button class="dropdown-item" onclick="renderByBrandName('${p.brand}')">${p.brand}</button></li>

`).join('')

// document.querySelector('#rendeBrands').innerHTML = brands.map((b)=>`
//     <li><button class="dropdown-item" onclick="renderByBrandName('${b}')">${b}</button></li>

// `)

}
renderBrand()
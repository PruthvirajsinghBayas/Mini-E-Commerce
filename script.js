const watches =[
    {
        id:1,
        title:"Fastrack ZRX FNS 7 Attractive Smartwatch",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis",
        price:2345,
        stock:10,
        brand:"Fastrack"
    },
     {
        id:2,
        title:"Fastrack Marvellous FX2 Unisex Smartwatch",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis",
        price:2345,
        stock:10,
        brand:"Titan"
    },
     {
        id:3,
        title:"boAT Storm Infinity Smartwatch",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis",
        price:2345,
        stock:10,
        brand:"Boat"
    }
]

renderCardElmt = document.querySelector("#renderCard");

renderCardElmt.innerHTML = watches.map((w,i)=>`
 <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Price : ${w.price}</p>
         <p class="card-text">Stock : ${w.stock}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
`).join("")
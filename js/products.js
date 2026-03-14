fetch("https://fakestoreapi.com/products")

.then(res=>res.json())

.then(products=>{

let html=""

products.forEach(p=>{

html+=`

<div class="col-md-4 mb-4">

<div class="card h-100">

<img src="${p.image}" class="card-img-top" style="height:200px;object-fit:contain">

<div class="card-body">

<h5 class="card-title">${p.title}</h5>

<p class="card-text">$${p.price}</p>

<button class="btn btn-primary" onclick="addCart('${p.title}',${p.price})">
Agregar al carrito
</button>

</div>

</div>

</div>

`

})

document.getElementById("products").innerHTML=html

})

function addCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({
name:name,
price:price
})

localStorage.setItem("cart", JSON.stringify(cart))

alert("Producto agregado al carrito")

}
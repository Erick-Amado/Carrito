fetch("https://fakestoreapi.com/products")

.then(res => res.json())

.then(products => {

let html=""

products.forEach(p=>{

html+=`
<div>

<h3>${p.title}</h3>

<img src="${p.image}" width="100">

<p>$${p.price}</p>

<button onclick="addCart('${p.title}',${p.price})">

Agregar al carrito

</button>

</div>
`

})

document.getElementById("products").innerHTML=html

})

function addCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Producto agregado")

}
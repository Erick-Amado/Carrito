if(localStorage.getItem("auth") !== "true"){

window.location="login.html"

}

let products = [

{name:"Laptop",price:900},
{name:"Mouse",price:20},
{name:"Teclado",price:50}

]

let html=""

products.forEach(p=>{

html += `
<div>
<h3>${p.name}</h3>
<p>$${p.price}</p>
<button onclick="addCart('${p.name}',${p.price})">Agregar</button>
</div>
`

})

document.getElementById("products").innerHTML = html

function addCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Producto agregado")

}
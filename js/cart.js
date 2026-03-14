let cart = JSON.parse(localStorage.getItem("cart")) || []

let html=""
let total=0

cart.forEach(p=>{

html += `<p>${p.name} - $${p.price}</p>`

total += p.price

})

html += `<h3>Total: $${total}</h3>`

html += `<button onclick="checkout()">Comprar</button>`

document.getElementById("cart").innerHTML = html


function checkout(){

if(localStorage.getItem("auth") !== "true"){

alert("Debes iniciar sesión")

window.location="login.html"

}else{

alert("Compra realizada")

localStorage.removeItem("cart")

}

}
let cart = JSON.parse(localStorage.getItem("cart")) || []

let html=""
let total=0

cart.forEach(p=>{

html += `<p>${p.name} - $${p.price}</p>`
total += p.price

})

html += `<h3>Total: $${total}</h3>`

document.getElementById("cart").innerHTML = html
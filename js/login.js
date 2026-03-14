function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

if(user === "admin" && pass === "1234"){

localStorage.setItem("auth","true")
window.location="index.html"

}else{

alert("Usuario o contraseña incorrectos")

}

}
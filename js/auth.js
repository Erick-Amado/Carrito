function register(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Cuenta creada")

window.location="login.html"

}


function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

let savedUser=localStorage.getItem("user")
let savedPass=localStorage.getItem("pass")

if(user===savedUser && pass===savedPass){

localStorage.setItem("auth","true")

window.location="index.html"

}else{

alert("Datos incorrectos")

}

}
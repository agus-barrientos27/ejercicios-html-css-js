var a = document.getElementById("cuad1");
var b = document.getElementById("cuad2");
var c = document.getElementById("cuad3");
var d = document.getElementById("cuad4");

a.addEventListener("click", mostrarError);
b.addEventListener("click", mostrarAcierto);
c.addEventListener("click", mostrarError);
d.addEventListener("click", mostrarError);

function mostrarError() {
    alert("incorrecto, no era ese");
}

function mostrarAcierto() {
    alert("adivinaste, era ese");
}



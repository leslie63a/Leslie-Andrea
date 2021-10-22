function login() {

var U,P;

U=document.getElementById("usu").value;
P=document.getElementById("pass").value;

if (U=="leslie"&&P=="12345"){
	alert("Correcto");
	window.open("PesoGalactico.html");
	document.getElementById("usu").value="";
	document.getElementById("pass").value="";
}
else{
	alert("No es la contrasena");
	document.getElementById("usu").value="";
	document.getElementById("pass").value="";
}
}
var password = 1234;

function autentificar() {
  var usuario = document.getElementById("txt_usuario").value;
  var contraseña = document.getElementById("txt_contraseña").value;

  if (usuario == "Nicolas" && contraseña == password) {
    alert("usuario y contraseña validos");
  } 
}

function changepw() {
  alert("Cambio de Contraseña");
  password = prompt("Ingrese la nueva contraseña");
}

var count = 0;
var btn = document.getElementById("btn_autentifica")

btn.onclick = function(){
  count++;
  if(count>=4){
    alert("Cuenta bloqueada")
  }else{
    alert("Verifique sus datos")
  }
  
}



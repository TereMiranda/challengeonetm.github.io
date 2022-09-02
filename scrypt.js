function btnencriptar(){

    var texto = document.getElementById("inputText").value.toLowerCase();
    var textocifrado = texto.replace(/e/igm,"enter"); 
    var textocifrado = textocifrado.replace(/o/igm,"ober"); 
    var textocifrado = textocifrado.replace(/i/igm,"imes"); 
    var textocifrado = textocifrado.replace(/a/igm,"ai"); 
    var textocifrado = textocifrado.replace(/u/igm,"ufat"); 

    document.getElementById("contenedor-muneco").style.display = "none";
    document.getElementById("contenedor-texto1").style.display = "none";
    document.getElementById("contenedor-texto2").innerHTML = textocifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}

function btndesencriptar(){

    var texto = document.getElementById("inputText").value.toLowerCase();
    var textocifrado = texto.replace(/enter/igm,"e"); 
    var textocifrado = textocifrado.replace(/ober/igm,"o"); 
    var textocifrado = textocifrado.replace(/imes/igm,"i"); 
    var textocifrado = textocifrado.replace(/ai/igm,"a"); 
    var textocifrado = textocifrado.replace(/ufat/igm,"u"); 

    document.getElementById("contenedor-muneco").style.display = "none";
    document.getElementById("contenedor-texto1").style.display = "none";
    document.getElementById("contenedor-texto2").innerHTML = textocifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}

function copy(){
    var contenido = document.querySelector("#contenedor-texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje copiado")
}
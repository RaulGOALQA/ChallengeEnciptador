
function encriptado(){/*La funcion de encriptado que sera llamada hasta que se haga clic en el botón */
    var input=document.querySelector(".textoEntrada");
    var texto=input.value.split("");//la funcion split("") devuelve un array con todos los valores del string del input separados uno a uno
    var textoEncriptado="";
    for (var i = 0; i <= texto.length - 1; i++) {
        switch(texto[i]){
            case 'e':
                texto[i]="enter";
                break
            case 'i':
                texto[i]="imes";
                break
            case 'a':
                texto[i]="ai";
                break
            case 'o':
                texto[i]="ober";
                break	
            case 'u':
                texto[i]="ufat";
                break	
        }
        textoEncriptado=textoEncriptado+texto[i];
    }
    input.value="";
    var output=document.querySelector(".textoResultado")
    output.value=textoEncriptado;
}

function desencriptado(){
    var input=document.querySelector(".textoEntrada");
    //console.log(input.value)
    var texto=input.value.split("");
    var textoDesencriptado="";
    for (var i = 0; i <= texto.length - 1; i++) {
        //console.log(texto[i]);
        switch(texto[i]){
            case 'e':
                texto.splice(i+1,4);
                break
            case 'i':
                texto.splice(i+1,3);
                break
            case 'a':
                texto.splice(i+1,1);
                break
            case 'o':
                texto.splice(i+1,3);
                break	
            case 'u':
                texto.splice(i+1,3);
                break	
        }
        textoDesencriptado=textoDesencriptado+texto[i];
    }
    input.value="";
    var output=document.querySelector(".textoResultado")
    output.value=textoDesencriptado;
}

function copiarAlPortapapeles() {
    var content = document.getElementById("copy");
    content.select();
    document.execCommand("copy");
}


var buttonEncriptar=document.querySelector(".encriptar");
buttonEncriptar.onclick = encriptado; 
var buttonDesencriptar=document.querySelector(".desencriptar");
buttonDesencriptar.onclick = desencriptado;
var buttonCopiar=document.querySelector(".copiar");
buttonCopiar.onclick = copiarAlPortapapeles;
input=document.querySelector(".textoEntrada");
console.log(input);
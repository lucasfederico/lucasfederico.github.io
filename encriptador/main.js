const textArea = document.querySelector("textarea");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const contenedorImagen = document.querySelector("#contenedorImagen");
const mostrar = document.querySelector("#mostrar");
const mostrarText = document.querySelector("#mostrarText");

let arrayTexto = []
let textoTransformado;
let saveTextArea;

function Encriptar() {
  if (textArea.value != "") {
    // Pongo el div de "ningun mensaje fue encontrado" en display none
    contenedorImagen.style.display = "none";
    mostrar.style.display = "flex";
    mostrar.style.flexDirection = 'column';
    saveTextArea = textArea.value
    arrayTexto = textArea.value.split("").map(letra => {
      if (letra == "e"){
        return "enter"
      }
      else if(letra == "i"){
        return "imes"
      }
      else if(letra == "a"){
        return "ai"
      }
      else if(letra == "o"){
        return "ober"
      }
      else if(letra == "u"){
        return "ufat"
      }
      else{
        return letra
      }

    })
    textoTransformado = arrayTexto.join('');
    mostrarText.innerHTML = textoTransformado
    textArea.value = ''
  }
  else {
    alert("Ingrese un texto por favor.");
  }
}

function Desencriptar (){
  textArea.value   = saveTextArea;
  contenedorImagen.style.display = "";
    mostrar.style.display = "none";
}

btnEncriptar.addEventListener("click", Encriptar);

btnDesencriptar.addEventListener("click", Desencriptar);

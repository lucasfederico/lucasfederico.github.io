
// Div Principal Nada para hacer
let divPrincipal = document.getElementById('caja')
// Imagen snorlax
let snorlax = document.getElementById('snorlax')
let popup = document.getElementById('popup')
let  boton = document.getElementById('boton')
let cancelar = document.getElementById('cancelar')
// Input nombre de tarea
let input1 = document.getElementById('input1')
// Input Tipo de la tarea
let tipoDeTarea = document.getElementById('tipodetarea')
// Input Descripción de la tarea
let areaDeTexto = document.getElementById('areadetexto')
// Boton Crear Tarea
let agregar = document.getElementById('agregar')
// Boton Borrar Tarea
let borrarTarea = document.getElementById('botonBorrarTarea')
// Boton resetear input 1
let resetear = document.getElementById('resetear')

// Lista de tareas
let listaDeTareas = document.getElementById('listaDeTareas')

// Funcion para abrir el popup
boton.addEventListener('click', function(){
    popup.classList.add('mostrar')
}
)
//Funcion Para cerrar el popup
cancelar.addEventListener('click', function(){
    popup.classList.remove('mostrar')
}
)
//Funcion para borrar el value del input Nombre de la Tarea
resetear.addEventListener('click', function(){
    input1.value = ''
})



//Funcion Boton agregar Tarea
agregar.addEventListener('click', function(){

    divPrincipal.classList.add('ocultar')
    if (input1.value != '' && areaDeTexto.value != '' && tipoDeTarea.value != 'Selecciona' && (check1.checked == true || check2.checked ==true || check3.checked == true || check4.checked == true)){

            let divElement = document.createElement('div');
            let divElement2 = document.createElement('div')
            let headingElement = document.createElement('h1');
            let heading3Element = document.createElement('h4')
            let paragraphElement = document.createElement('p');

            let buttonDeleter = new Image()
            buttonDeleter.src = 'images/papelera.png'
            buttonDeleter.classList.add('cursorPointer')
            buttonDeleter.addEventListener('click', function(){
                divElement.remove()
            })
            // Crear un objeto Image
            var miImagen = new Image();

            // Establecer la ruta de la imagen
            miImagen.src = 'images/homework.png'
            divElement.appendChild(miImagen);

            headingElement.textContent = input1.value;
            heading3Element.textContent = tipoDeTarea.value;
            paragraphElement.textContent = areaDeTexto.value;
            
            divElement2.appendChild(headingElement);
            divElement2.appendChild(heading3Element)
            divElement2.appendChild(paragraphElement);
            
            divElement.appendChild(divElement2)
            
            divElement.appendChild(buttonDeleter)
            listaDeTareas.appendChild(divElement);
            divElement.classList.add('divTarea')
            // Prioridad de la tarea
            if (check1.checked == true) {
                divElement.classList.add('bordeBlack')
            }
            else if (check2.checked == true){
                divElement.classList.add('bordeGreen')
            }
            else if (check3.checked == true){
                divElement.classList.add('bordePurple')
            }
            else if (check4.checked == true){
                divElement.classList.add('bordeRed')
            }
            popup.classList.remove('mostrar')   
    }
    else{
        alert('Complete los campos por favor')
    }
})

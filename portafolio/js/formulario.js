const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');

const validacion = () => {
    if (nombre.value != '' && email.value != '' && asunto.value != '' && mensaje != ''){
        
    }
    else{
        alert('Complete los campos por favor')
    }
}

enviar.addEventListener('click', validacion)
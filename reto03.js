
let popup = document.getElementById('popup')
let  boton = document.getElementById('boton')
let cancelar = document.getElementById('cancelar')

let input1 = document.getElementById('input1')
let resetear = document.getElementById('resetear')

boton.addEventListener('click', function(){
    popup.classList.add('popupon')
}
)
cancelar.addEventListener('click', function(){
    popup.classList.remove('popupon')
}
)

resetear.addEventListener('click', function(){
    input1.value = ''})
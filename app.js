let bototnElem = document.getElementById('boton-cambiar-cita')
let citaElem = document.getElementById('cita')
let autorElem = document.getElementById('autor')

function generarEnteroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){    
let indiceAleatorio = generarEnteroAleatorio(0,citas.length);
citaElem.innerText =  `"${citas[indiceAleatorio].texto}"`;
autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

bototnElem.addEventListener('click', cambiarCita)//no se usa los parentesis porque estamos pasando una referencia de la funcion
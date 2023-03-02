//obtener datos del archivo json al html//

var perfil = document.getElementById("nombre");
perfil.innerHTML=info[0].nombre;

var perfil1 = document.getElementById("apellido");
perfil1.innerHTML=info[1].apellido;

var perfil2 = document.getElementById("fecha-n");
perfil2.innerHTML=info[2].fecha;

var ubic = document.getElementById("localidad");
ubic.innerHTML=info[3].localidad;

var ubic1 = document.getElementById("provincia");
ubic1.innerHTML=info[4].provincia;

var ubic2 = document.getElementById("nacionalidad");
ubic2.innerHTML=info[5].nacionalidad;

var contacto = document.getElementById("telefono");
contacto.innerHTML=info[6].telefono;

var contacto1 = document.getElementById("correo");
contacto1.innerHTML=info[7].correo;

//funciones para seccion estudios

document.getElementById("mostrar").onclick = function() {
    document.getElementById("progreso").innerHTML = 'COMPLETADO 2011-2016'
}

document.getElementById("mostrar0").onclick = function() {
    document.getElementById("progreso0").innerHTML = 'COMPLETADO 2020-2021'
}

document.getElementById("mostrar1").onclick = function() {
    document.getElementById("progreso1").innerHTML = 'COMPLETADO 2021-2023'
}

document.getElementById("mostrar2").onclick = function() {
    document.getElementById("progreso2").innerHTML = 'EN CURSO 2023-PRESENTE'
}
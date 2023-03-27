var i = 0;
var imagenes = [];
var titulo = [];
var time = 2000;

imagenes[0] = '/img/santuario.jpg';
imagenes[1] = '/img/escalinata.jpg';
imagenes[2] = '/img/jose.jpg';
imagenes[3] = '/img/plaza.jpg';

titulo[0] = 'Santuario de Itakua';
titulo[1] = 'Ecalinata San Pedro';
titulo[2] = 'Playa San José';
titulo[3] = 'Plaza de Armas';

function slide(){
    document.getElementById("img").src= imagenes[i];
    document.getElementById("titulo").textContent= titulo[i];
    if(i < imagenes.length-1){
        i++
    }
    else{
        i=0;
    }
    setTimeout("slide()",time);
}
window.onload = slide;
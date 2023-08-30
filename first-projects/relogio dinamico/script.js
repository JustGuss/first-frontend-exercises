
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const time = setInterval(function(){
let date = new Date();
let h = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

horas.textContent = h
minutos.textContent = min
segundos.textContent = sec

});






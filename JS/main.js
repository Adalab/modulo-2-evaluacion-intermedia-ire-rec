'use strict';

//ELEMENTOS
const btn = document.querySelector('.js-btn');
const choose = document.querySelector('.js-choose');
const message = document.querySelector('.js-message');
const attempt = document.querySelector('.js-attempt');


//FUNCIONES ESPECÍFICAS
const valueChoose = choose.value;


function compareValues(){
message.innerHTML= "has ganado campeona";

if (valueChoose > getRandomNumber(100));
message.innerHTML="Demasiado alto";

if (valueChoose < getRandomNumber(100));
message.innerHTML="Demasiado bajo";
return compareValues();

}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
   console.log (getRandomNumber(100));

//FUNCIONES GLOBALES

function handleClick(ev){
    ev.preventDefault();
    compareValues();
       
}

//EVENTOS
btn.addEventListener("click", handleClick);
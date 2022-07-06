'use strict';

const btn = document.querySelector('.js-btn');
const choose = document.querySelector('.js-choose');
const writeNumberP1 = document.querySelector('.js-writeNumberP1');
const numberAttemptP2 = document.querySelector('.js-numberAttemptP2');


function handleClick(ev){
    ev.preventDefault();
    console.log("Ye! Funciona")
}


btn.addEventListener("click", handleClick);
'use strict';

const btn = document.querySelector('.js-btn');
const choose = document.querySelector('.js-choose');
const writeNumberP1 = document.querySelector('.js-writeNumberP1');
const numberAttemptP2 = document.querySelector('.js-numberAttemptP2');


const chooseNumber=()=>{
if(chooseValue===getRandomNumber);
else('Has ganado campeona!!!');
}


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);       
   }

function pickUpValue(){
    const chooseValue = choose.value;
    console.log(chooseValue);    
}

function handleClick(ev){
    ev.preventDefault();
    pickUpValue();
    getRandomNumber(100);

}


btn.addEventListener("click", handleClick);
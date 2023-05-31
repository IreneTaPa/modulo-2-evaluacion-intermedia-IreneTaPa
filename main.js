'use strict'; 
console.log('Holis'); 

const selectNumber = document.querySelector('.js_select');
const inputBet = document.querySelector('.js_input-bet');
const playButton = document.querySelector('.js_input-btn');
const message = document.querySelector('.js_message');
const moneyBalance = document.querySelector('.js_balance');
const startMoney = 50; 

//funcion numero aleatorio 
function getRandomNumber(max) {
    return Math.ceil(Math.random()*max);     
}

//funcion mensaje / parseInt para convertir el "texto" en numero y así si acertamos el mensaje nos dará que hemos ganado 
function resultMessage(randomNumber) {
    if (parseInt(selectNumber.value) === randomNumber) {
        message.innerHTML = `Has ganado el doble de lo apostado :)`
    } else {
        message.innerHTML = 'Has perdido lo apostado :('
    }
    console.log(randomNumber); 
    
}
//funcion saldo NO FUNCIONA 
/*function balance(randomNumber) {
    const result1 = startMoney * 2; 
    const result2 = startMoney - inputBet.value; 
    const result3 = startMoney - 50; 
    const result4 = startMoney + 150; 
   if (parseInt(selectNumber.value) === randomNumber) {
        moneyBalance.innerHTML = `Saldo: ${result1}`; 
    } else if {
        moneyBalance.innerHTML = `Saldo: ${result2}`; 
    } else if {
        moneyBalance.innerHTML = `Saldo: ${result3}`; 
    } else if {
        moneyBalance.innerHTML = `Saldo: ${result4}`;
    }
}*/

function handleClickBtn(){
    event.preventDefault(); 
    const randomNumber = getRandomNumber(6);
    resultMessage(randomNumber); 
    balance(randomNumber); 
}
//evento click sobre playButton
playButton.addEventListener('click', handleClickBtn); 

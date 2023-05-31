'use strict'; 

//QUERYES 
const selectNumber = document.querySelector('.js_select');
const userBetInput = document.querySelector('.js_input-bet');
const playButton = document.querySelector('.js_input-btn');
const messageElement = document.querySelector('.js_message');
const moneyBalance = document.querySelector('.js_balance');
const userBalanceSpan = document.querySelector('.js_balanceSpan');
//VARIBALES GLOBALES 
let startMoney = 50; //let porque el balance irá cambiando

//funcion numero aleatorio 
function getRandomNumber(max) {
    return Math.ceil(Math.random()*max);     
}
//funcion has ganado saldo  
function increseBalance() {
    const bet = parseInt(userBetInput.value); 
    startMoney = startMoney + (bet*2); 
    userBalanceSpan.innerHTML = startMoney; 
}
//funcion has perdido saldo
function decreaseBalance() {
 const bet = parseInt(userBetInput.value); 
    startMoney = startMoney - bet; 
    userBalanceSpan.innerHTML = startMoney;
 }

//funcion mensaje / parseInt para convertir el "texto" en numero y así si acertamos el mensaje nos dará que hemos ganado 
function resultMessage(randomNumber) {
    if (parseInt(selectNumber.value) === randomNumber) {
        messageElement.innerHTML = `Has ganado el doble de lo apostado :)`
        increseBalance(); //funcion has ganado saldo 
    } else {
        messageElement.innerHTML = 'Has perdido lo apostado :('
        decreaseBalance(); //funcion has perdido saldo
    }
    console.log(randomNumber);     
}

//funcion manejadora (jefa)
function handleClickBtn(event){
    event.preventDefault(); 
    const randomNumber = getRandomNumber(6);
    resultMessage(randomNumber); // se trae la función del numero aleatorio y de la variable increaseBalance o decreaseBalance (dependiendo de si ganamos saldo o no)
}
//evento click sobre playButton
playButton.addEventListener('click', handleClickBtn); 

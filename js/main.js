'use strict';

const selectNumber = document.querySelector('.js_select');
const userBetInput = document.querySelector('.js_input-bet');
const playButton = document.querySelector('.js_input-btn');
const messageElement = document.querySelector('.js_message');
const moneyBalance = document.querySelector('.js_balance');
const userBalanceSpan = document.querySelector('.js_balanceSpan');

let startMoney = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function increseBalance() {
  const bet = parseInt(userBetInput.value);
  startMoney = startMoney + bet * 2;
  userBalanceSpan.innerHTML = `${startMoney}€ 🪙 `;
}

function decreaseBalance() {
  const bet = parseInt(userBetInput.value);
  startMoney = startMoney - bet;
  userBalanceSpan.innerHTML = `${startMoney}€ 🪙`;
}

function updateMessage(message) {
  messageElement.innerHTML = message;
}

function resultMessage(randomNumber) {
  console.log(randomNumber);
  let select = selectNumber.selectedIndex;
  if (select == null || select == 0) {
    updateMessage('Debes seleccionar un numero del 1 al 6 para poder apostar');
  } else if (parseInt(selectNumber.value) === randomNumber) {
    updateMessage('Has ganado el doble de lo apostado :)');
    increseBalance();
  } else {
    updateMessage('Has perdido lo apostado :(');
    decreaseBalance();
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  const randomNumber = getRandomNumber(6);
  resultMessage(randomNumber);
}

playButton.addEventListener('click', handleClickBtn);

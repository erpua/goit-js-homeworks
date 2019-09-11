const credits = 23580;
const priceForDroid = 3000;
let message;
let totalPrice = 0;
let moneyLeft = 0;

const quantityOfDroids = prompt('How many droids would you like to buy?');

if (!quantityOfDroids) {
  message = 'Отменено пользователем!';
  alert(message);
} else {
  totalPrice = priceForDroid * quantityOfDroids;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    moneyLeft = credits - totalPrice;
    console.log(
      `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${moneyLeft} кредитов.`,
    );
  }
}

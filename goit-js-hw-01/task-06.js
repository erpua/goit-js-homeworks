/* const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null || input === '' || isNaN(input)) break;
  numbers.push(+input);
} while (input);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Cумма всех значений в массиве ${total}`); */

const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');
  const inputNumber = +input;
  if (input === null) break;
  if (input === '') break;
  if (Number.isNaN(inputNumber)) break;
  numbers.push(inputNumber);
} while (input);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Сумма всех чисел в массиве ${total}`);

/* let userInput;
let total = 0;

while (true) {
  userInput = prompt('Введите число больше нуля');

  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);

  if (userInput <= 0) {
    break;
  }

  total += userInput;
}

console.log(total); */

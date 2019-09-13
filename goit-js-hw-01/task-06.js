const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');
  const inputNumber = +input;
  if (input === null) {
    numbers.push(input);
    break;
  }
  if (Number.isNaN(inputNumber)) break;
  numbers.push(inputNumber);
} while (input);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log('numbers:', numbers);
alert(`Сумма всех чисел в массиве ${total}`);

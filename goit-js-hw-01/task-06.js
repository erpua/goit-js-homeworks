const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null || input === '' || isNaN(input)) break;
  numbers.push(+input);
} while (true);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Cумма всех значений в массиве ${total}`);

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Input value');
  const inputNumber = +input;
  if (input === null) {
    numbers.push(input);
    break;
  }
  if (Number.isNaN(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз');
  }
  numbers.push(inputNumber);
} while (input);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Сумма всех чисел в массиве [ ${total} ]`);

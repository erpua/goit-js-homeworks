/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(arr, productName) {
  let total = '';
  for (const key in arr) {
    for (const keyOfKeys in arr[key]) {
      if (arr[key][keyOfKeys] === productName) {
        console.log('arr[key][keyOfKeys]:', arr[key][keyOfKeys]);
        console.log('arr[key]:', arr[key].price);
        console.log('arr[key]:', arr[key].quantity);
        total = arr[key].price * arr[key].quantity;
      }
    }
  }
  return total;
}
console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800

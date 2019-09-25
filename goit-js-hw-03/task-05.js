/* У меня есть массив объектов JavaScript со следующей структурой:

objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
Я хочу извлечь поле из каждого объекта и получить массив, содержащий значения, например, поле foo даст массив [ 1, 3, 5 ].

Я могу сделать это с помощью этого тривиального подхода: */

const objArray = [{ foo: 1, bar: 2 }, { foo: 3, bar: 4 }, { foo: 5, bar: 6 }];

function getFields(input, field) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i][field]);
  }
  return output;
}

console.log(getFields(objArray, 'foo')); // returns [ 1, 3, 5 ]

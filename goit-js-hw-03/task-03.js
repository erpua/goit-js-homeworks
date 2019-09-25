/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function findBestEmployee(employees) {
  let workerName = '';
  let maxTasks = 0;
  for (const key in employees) {
    /* console.log('employees[key]:', employees[key]);
    console.log('key:', key); */
    if (maxTasks < employees[key]) {
      maxTasks = employees[key];
      workerName = key;
    }
  }
  return workerName;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

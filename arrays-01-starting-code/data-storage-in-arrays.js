// II. Data Storage within Arrays.

// 1. Data of same type - Numbers, Strings, Object etc.
const sameTypeArray = ['Item1', 'Item2', 'Item3', 'Item4'];
console.log(sameTypeArray);

// 2. Data of different types
const differentTypeArray = [
  'Item1',
  10,
  'Item3',
  { names: ['person1', 'person2', 'person3'] },
];
console.log(differentTypeArray);

// 3. Arrays inside an array - nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6], 99];

// Accessing nested arrays
for (const data of nestedArray) {
  if (data.length >= 2) {
    for (const dataPoint of data) {
      console.log(dataPoint);
    }
  } else {
    console.log(data);
  }
}

// II. Data Storage within Arrays.

// 1. Data of same type - Numbers, Strings, Object etc.
// Array of strings.
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

// To access all values from a nested array
for (const data of nesterArray) {
  for (const innerData of data) {
    console.log(innerData);
  }
}

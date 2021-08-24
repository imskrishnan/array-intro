// indexOf - returns the first occurence of a value in the array or -1 if the element is not present.

const cars = ['toyota', 'tesla', 'covette', 'porsche', 'honda', 'covette'];
console.log(cars.indexOf('tesla'));

// lastIndexOf() - returns the last occurence of a particular element in the array or returns -1 if none was found.
console.log(cars.lastIndexOf('covette'));

// this doesnt work for reference values like objects
// here it doesnt work since eventhough the values passed into the indexOf looks similar to the data available in the personData array they are having different storage locations in the heap memory
const personData = [
  { name: 'Santhosh' },
  { name: 'Virat' },
  { name: 'Santhosh' },
];
console.log(personData.indexOf({ name: 'Santhosh' }));

// Array.find() method does not create a copy of the array
const result = personData.find((person, index, persons) => {
  // like a query that needs to match to be able to get a result.
  return person.name === 'Virat';
});
result.name = 'Santhosh Krishnan';
console.log(result);
console.log(personData);

// Array.findIndex() method returns the index of the required element in the array, even for objects
const findIndexResult = personData.findIndex((person, index, persons) => {
  return person.name === 'Santhosh';
});
console.log(findIndexResult);

// includes() method used on primitive types
cars.includes('tesla') ? console.log('True') : console.log('false');

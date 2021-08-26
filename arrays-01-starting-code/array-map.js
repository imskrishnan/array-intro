// Array.map() - maps through each element in the array and returns a completely new array with the modified values as opposed to forEach()
const numbers = [1, 2, 3, 4, 5, 6];

const numbersTimes10 = numbers.map((number, index, numbers) => {
  return number * 10;
});

console.log(numbersTimes10);

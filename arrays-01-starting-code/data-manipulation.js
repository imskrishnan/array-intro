// 1. Adding and removing elements from an array.
const hobbiesArray = ['cooking', 'cricket', 'singing'];
hobbiesArray.push('instruments'); // pushes the value to the end of the array
console.log(hobbiesArray);

const poppedElement = hobbiesArray.pop(); // pops the element from the end of the array and returns the popped value
console.log(poppedElement);

hobbiesArray.unshift('dancing'); // unshift() adds element to the start of the array and returns the new length of the array.
console.log(hobbiesArray);

const firstElement = hobbiesArray.shift();
console.log(hobbiesArray);
console.log('removed first element', firstElement);

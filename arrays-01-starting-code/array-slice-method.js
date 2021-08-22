//array slice method
/**
 * Array.slice() method gets the copy of the array that we are referencing, creates a new array in the heap, and can be manipulated to get the copy of any of its subsets
 * Negative indices can also be used for the slice() method.
 */

const shoppingCart = [
  'milk',
  'egg',
  'bread',
  'cereal',
  'chocolate chips',
  'cheetos',
  'tomatoes',
  'potatoes',
  'apples',
  'bananas',
];
console.log(shoppingCart);

const shoppingSliceCart1 = shoppingCart.slice(1, 3);
console.log(shoppingSliceCart1);

const shoppingSliceCart2 = shoppingCart.slice(-3, -1);
console.log(shoppingSliceCart2);

const shoppingSliceCart3 = shoppingCart.slice(2);
console.log(shoppingSliceCart3);

/**
 * Array.concat() - adds new elements to the end of the array that we are interested in and returns a new array
 */

const shoppingCartConcat1 = shoppingCart.concat(
  'protein bars',
  'pepsi',
  'ben and jerrys',
  'pepperoni pizza'
);
console.log(shoppingCartConcat1);
console.log(shoppingCart);

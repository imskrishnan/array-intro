// 1. Create arrays by using square brackets. Best way to create arrays that gives us the best performance.
const numbers = [1, 2, 3, 4]; //best performance.
console.log('numbers', numbers);

// 2. Using constructor method
/**
 * new Array() constructor method works well with multiple arguments inside it.
 * if there is only 1 "Number" argument, it creates an empty array with length equal to the argument that was passed.
 * for eg. const constructorArray = new Array(10), creates an empty array of length 10 and is also un-initialized.
 */
const constructorArray = new Array(5);
console.log('constructor Array', constructorArray);
constructorArray[0] = 90;
console.log('new constructor array', constructorArray);

// 3. Omitting new Keyword.
/**
 * The behavior observerd for "new Array()" holds true for withoutNewKeyWord also.
 */
const withoutNewKeyWord = Array(5, 2);
console.log('withoutNewKeyWord', withoutNewKeyWord);

/**
 * 4. Array.of()
 */
const arrayOf = Array.of(1, 2, 3, 4, 5);
console.log('arrayOf', arrayOf); // slower performance.

/**
 * 5. Array.from(<iterables OR array-like object>)
 * This is a special Array function
 * This function does not take arguments, but instead takes iterables / array like objects as its arguments and converts them into REAL ARRAYS
 */
const arrayFrom = Array.from('Hi!');
console.log('arrayFrom', arrayFrom);

/**
 * Another use case is when manipulating array-like/iterables from the DOM
 * REFER: index.html and select the list-items
 */
const listItemsFromDom = document.querySelectorAll('li');
const arrayFromListItems = Array.from(listItemsFromDom);
console.log('arrayFromOnListItems', arrayFromListItems);

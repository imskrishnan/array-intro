/** splice() helps us insert elements in between 2 elements
// NOTE** : splice() is only available for REAL-Arrays and not on Iterables and Array-Like objects!
// This is one of the main reasons why we convert Iterables/Array-like objects to Real Arrays using Array.from method

 * syntax:
 * Array.splice(starting index<including the specified index>, number of items to delete from that index, [elements to be added into that])
 */

const pkbs = ['kl', 'gayle', 'pooran', 'meredith'];
pkbs.splice(0, pkbs.length, 'virat');
console.log(pkbs);

// If there is no deleteCount specified, all elements would be deleted
pkbs.splice(0);
console.log(pkbs);

// splice() returns the elements that were removed as an array
pkbs.push('kl', 'gayle', 'pooran');
console.log(pkbs);

const returnValues = pkbs.splice(0);
console.log(returnValues);

// an index of -1 starts looking from the end of the array
pkbs.push('kl', 'gayle', 'pooran');
pkbs.splice(-1, 1, 'santhosh');
console.log(pkbs);

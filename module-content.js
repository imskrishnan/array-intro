// Arrays and Iterables

/*
  1. Learn about different ways of creating arrays in Javascript
  2. Working with arrays.
  3. Important Array methods.
  4. Other Iterables. Maps and Sets.
  5. What are iterables.
*/

// What is an Iterable?

// Iterables are objects that implement the iterable protocol and that have the
// @@iterator method - Symbol.iterator,
// in other words, we can use the for-of loops on an iterable
// Note:: NOT EVERY ITERABLES ARE ARRAYS!!
// For e.g. NodeList, String, Map, Set are ITERABLES that are not ARRAYS.

// Array-Like Objects?
// Technical - Objects that have a length property and uses indexes to access them
// Note:: NOT EVERY "ARRAY-LIKE" OBJECTS ARE ARRAYS!!
// For e.g. NodeList, String etc are just ARRAY-LIKE objects and are not actual ARRAYS.

/**
 * Arrays in Javascript have additional functionality that can be used which cannot be performed on an iterable or an array like object
 */

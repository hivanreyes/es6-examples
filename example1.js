/**
 * Arrow Functions
 */

//  Expression bodies
// const nums =  [1,2,3,4,5].map((v, i) => v + i);
// console.log(nums);

// // Statement bodies
// const nums1 = [1,2,3,4,5].map((v, i) => {
//   return v + i;
// })
// console.log(nums1);

/**
 * Lexical
 * s
 */

// Incorrect
// $('.btn').click(function () {
//   setTimeout(function () {
//       $(this).text('new');
//       // This will cause an error since function() defines this as the global object.
//   } ,100);
// });

// // Correct
// $('.btn').click(function () { // <- Enclosing context
//   setTimeout( () => {
//       $(this).text('new')  }
//       // This works, because this will be set to a value captured from the enclosing context.
//     ,100);
// });

/**
 * Parameters
 */

// Default parameters values
function f(x, y = 7, z = 42) {
  return x + y + z;
}
console.log(f(1) === 50);

// Rest parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function f(a, b, d, ...c) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
}
f(1,2,3,4,5);

// Spread operator
const params = [ "hello", true, 7 ];
const other = [ 1, 2, ...params ];
console.log(other);

const str = "foo";
const chars = [ ...str ];
console.log(chars)
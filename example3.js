/**
 * Short hands
 */

const x = 0, y = 0;
const obj = { x, y };
console.log(obj)

// es5
// { x: x, y: y }

/**
 * Computed prop names
 */
function name() {
  return 'text';
}

let obj1 = {
  foo: "bar",
  [ "baz" + name() ]: 42
};

console.log(obj1)

// es5
// var obj = {
//   foo: "bar"
// }
// obj['baz' + name()] = 42

/**
 * Method properties
 */

const obj2 = {
  name() {
    console.log('function name');
  },
  lastName() {
    console.log('function last name');
  }
}
console.log(obj3)

// const obj3 = {
//   name: () => {
//     console.log('function name');
//   },
//   lastName: () => {
//     console.log('function last name');
//   }
// }

// console.log(obj3)
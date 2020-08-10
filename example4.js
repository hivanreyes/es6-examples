/**
 * Destructuring
 */

 // Arrays
const array = [1,2,3,4,5];
let [a, b, , c ] = array;
console.log(a,b,c);

// Objects
const obj = {
  d: 'a value',
  e: {
    g: {
      h: 'e value'
    }
  },
  f: 'c value',
}

// const { d, e, f } = obj;
// console.log(d,e,f)

// const { d, e: { g: { h, j = 11 } } } = obj;
// console.log(h, j)


/**
 * Generators
 */

function* generator(i) {
  let index = i;
  while (true) {
    yield index++;
  }
}

const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);


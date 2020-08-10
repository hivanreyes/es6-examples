/**
 * Ejemplo 1 - Let - Const
 */

// Inmutable
const PI = 3.1416
// Mutable
let userName = 'hivanreyes'
console.log(PI);
console.log(userName);

// PI = 3.1417
userName = 'username'
console.log(userName);

/**
 * Scopes
 */

function testScopes() {
  const variable1 = 'valor 1';
  let variable2 = 'valor 2'

  if(true) {
    var variable3 = 'valor 3';
    console.log('variable 1 dentro de condición con', variable1)
    console.log('variable 2 dentro de condición con', variable2)
  }
  // console.log('variable 1 fuera de condición con', variable1)
  // console.log('variable 2 fuera de condición con', variable2)
  console.log('variable 3 fuera de condición con', variable3)
}
testScopes();


console.log('=================== Block function scope ===================');

if(true){
  function foo () { return 1 }
  console.log('valor de foo 1', foo());

  if(true) {
    function foo () { return 2 }
    console.log('valor de foo 2', foo());
    //foo() === 2
  }

  console.log('valor de foo 3', foo());
  foo() === 1
}
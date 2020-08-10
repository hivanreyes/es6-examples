/**
 * Template literals
 */
// String interpolation
const customer = { name: "Foo" };
const card = { amount: 7, product: "Bar", unitprice: 42 };
const message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

console.log(message)

// ES5
// var message = "Hello " + customer.name + ",\n" +
// "want to buy " + card.amount + " " + card.product + " for\n" +
// "a total of " + (card.amount * card.unitprice) + " bucks?";

/**
 * Custom interpolation
 */

const query = 'query';
console.log(`http://example.com/foo?bar=${'1' + '2'}&quux=${query}`)

/**
 * Raw String
 * backslashes are not interpreted
 */
const ex1 = RegExp("^\pL+$");
console.log(ex1);

const ex2 = RegExp(`^\pL+$`);
console.log(ex2)

const ex3 = RegExp(String.raw`^\pL+$`);
console.log(ex3)
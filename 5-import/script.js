//5-1 Import

import {hello} from './functions.js';  // importation de la fonction hello exportée depuis functions.js

hello(); // appel de la fonction

import {showError} from "./functions.js";
showError('Un message au hasard');

// import nyanCat   from "./functions.js";
// nyanCat()

// 5-2 Export

import * as math from "./math.js";

console.log(math.sum(7,9));
console.log(math.sub(7,9));
console.log(math.multiply(7,9));
console.log(math.divide(7,9));
console.log(math.pow(7,9));

// import {sum, sub, multiply, divide, pow} from "./math.js"
//
// console.log(sum(7,9));
// console.log(sub(7,9));
// console.log(multiply(7,9));
// console.log(divide(7,9));
// console.log(pow(7,9));

// const [a, b] = [7, 9];

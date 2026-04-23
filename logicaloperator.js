//And &&  Returns true only if both conditions are true
let a = 10;
console.log(a > 5 && a < 20); // true
console.log(a > 5 && a < 8);  // false

// OR || Returns true if at least one condition is true
let b = 10;
console.log(b > 5 || b < 8);  // true
console.log(b < 5 || b < 8);  // false

// NOT ! Reverses the result
let c = 10;
console.log(!(c > 5)); // false
console.log(!(c < 5)); // true

//?? (Nullish Coalescing Operator) It returns the right value only if the left value is null or undefined Otherwise, it returns the left value
// example 01
let score ;
let result = score ?? 100;
console.log(result); // 100
 //example 02
let score = 10;
let result = score ?? 100;
console.log(result); // 10
// 1+11 = 18
// + is operator
// 1,11 is operand
let a = 10, b = 5;

console.log(a + b); // 15
console.log(a - b); // 10
console.log(a * b); // 50
console.log(a / b); // 2  gives quotient
console.log(a % b); // 0  gives remainder
console.log(a > b); // true
console.log(a == "10");  // true checks only value not the type
console.log(a === "10"); // false  checks the value + type
a++; // increment operator increments 1 and a becomes 10
b-- // decrement operator decrements by 1 and b becomes 4

// Pre-Increment (++a) Value is increased first, then used
let c = 5;
let d = ++a;

console.log(c); // 6
console.log(d); // 6

//Post-Increment (a++) Value is used first, then increased

let e = 5;
let f = a++;

console.log(e); // 6
console.log(f); // 5
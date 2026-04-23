//Type conversion means changing a value from one data type to another.
let age = 23; // this is in number data type
console.log(typeof age); // shows number
age = String(age); // by using this we can able to convert into another data type
console.log(typeof age); 

let pass = true;
pass = String(pass);  // converting boolean int string
console.log(typeof pass);
 
let salary = '230000';
salary = Number(salary);  // converts string into number
console.log(typeof salary);
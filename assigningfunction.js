// 1.Assign Function to Another Variable
/*It means store a function inside another variable
Because in JavaScript, functions are treated like values

In Java, a function is called a method
 And it is NOT treated as a value
*/
let a = 11;
function oddeven(a){
    if(a%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
 
let x = oddeven;
console.log(x(5));

//2.Assigning Function to a Variable
let b = function(c){
    if(c%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(b(10));

//3.Arrow Function Assignment
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
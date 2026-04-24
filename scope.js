// Scope
//Scope defines where a variable can be accessed in your code
// global scope
/*A variable declared outside any function or block is called a global variable
It can be accessed anywhere in the program
*/
let name = "Muthu"; // global

function show() {
    console.log(name);
}

show();        // Muthu
console.log(name); // Muthu

//Local scope
/* A variable declared inside a function is called a local variable
It can be used only inside that function
*/
function test() {
    let a = 10; // local
    console.log(a);
}

test();        // 10
console.log(a); // ❌ Error


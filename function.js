// A function is a block of code that performs a specific task and can be reused multiple times.

/*function functionName(parameters) {
    // code
    return value; // optional
}*/

function sum(a,b=5){  // if value if not assigned 5 is replaced it acts as default value
    let c = a+b;
    console.log(c);
}
sum(10,20); //30
sum(30,40); //70

// using return statement
function difference(d,e){
    let f = d-e;
    return f;
}

let res = difference(10,20);
console.log(res);
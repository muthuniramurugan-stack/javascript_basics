//JSON stands for JavaScript Object Notation.
// It is a format used to store and exchange data.
/*👉 Object → normal JavaScript object
👉 JSON → string format */
let user = {
    name:"Muthu",
    age:19,
    salary:25000,
}
console.log(JSON.stringify(user)); // used to convert object into JSON
console.log(typeof user);

// to convert object into json
let user1 ='{"Name": "Muthu", "age": 19}';
console.log(JSON.parse(user1));

/*uses of json
1.API communication (main use)
When data comes from server, it is usually in JSON.
JavaScript converts it into object and uses it.
let user1 ='{"Name": "Muthu", "age": 19}';
console.log(JSON.parse(user1));
*/

/*
2.Sending data to server
Convert object into JSON before sending.
let user = {
    name:"Muthu",
    age:19,
    salary:25000,
}
console.log(JSON.stringify(user)); // used to convert object into JSON
console.log(typeof user);
*/
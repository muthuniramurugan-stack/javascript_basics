// for...in is used to iterate over the keys (properties) of an object
/*Syntax
for (let key in object) {
    // code
}

In an object, a key is the name (label) used to identify a value. 
example
let user = {
    name: "muthu",    // here name, age are the keys
    age: 23
};
*/
let user = {
    name : "Muthu",
    age : 19,
    height : "173.3 cm"
};
for(key in user){
    console.log(user[key])
}
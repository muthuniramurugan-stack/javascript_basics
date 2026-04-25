// An object is a data structure used to store multiple related values in the form of key–value pairs
let user = {
    name: "Muthu",
    age: 23,
    city: "Chennai"  // here name,age etc.. are properties of object user
};
// This is called an object literal,An object literal is the direct way of creating an object using {} (curly braces)
// we can able to delete a property inside a object
delete user.city;
// after creating of an object we can able to add values
user['mobileNo'] = 123658;
console.log(user);

// we can able to change the value after creation and 
user.age = 19;
console.log(user);
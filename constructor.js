// A constructor is a special function used to create and initialize objects.
/*Example:
If you want to create 100 students, instead of writing 100 objects manually, you create one constructor and make many objects from it. */
 
// without constructor
let student1 = {
    name: "Muthu",
    age: 19
};

let student2 = {
    name: "Murugan",
    age: 20
};

// with constructor
function User(a){
    this.name = a;
}
let res = new User("muthu");
let res1 = new User("Murugan")
console.log(res);
console.log(res1)
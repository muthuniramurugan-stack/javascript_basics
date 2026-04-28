// A class is a blueprint used to create objects.
class User{
    name = "Muthu";
    age = "19";
    display(){
        console.log("Hii, Iam Muthumurugan")
    }
}

let call = new User();
call.display();

class employee{
    #name;  // by using #  this property is declared as private so we cannot able to access outside of the class
    #age;
    constructor(name,age){
        this.#name = name;
        this.#age = age 
    }
    // we can able to access the properties by using getter method
// A getter is used to get (read) a property value from an object or class.

/* Syntax
get methodName() {
    return value;
} */


    get name(){
        return this.#name;
    }
    // A setter is used to set (update) a property value in an object or class.
    set name(name){ // we need to give one paramter
        this.#name = name;
    }
}
let c1 = new employee("Muthu",19); 
console.log(this.name); // it shows undefined because the property is declared as private 
console.log(c1.name);
console.log(c1.name = "Murugan");
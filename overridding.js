// A child class creates a method with the same name as the parent class method and changes its behavior.
/*A child class creates a method with the same name as the parent class method and changes its behavior. */
class Animal {
    name;
    legs;
    tail;

    constructor(legs, tail) {
        this.legs = legs;
        this.tail = tail;
    }

    display() {
        console.log("animal constructor");
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal {
    nationality;

    constructor(legs, tail, nationality) {
        super(legs, tail);   // calls parent constructor
        this.nationality = nationality;
    }

    // overriding parent method
    display() {
        console.log("Human function");
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nationality);
    }
}

//let call = new Animal(1, false);
//call.display();

let call1 = new Human(4, false, "Indian");
call1.display();
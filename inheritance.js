// Inheritance  one class can use the properties and methods of another class.
/* Parent class gives features
 Child class uses those features
This avoids repeating code. */
class animal{
    name;
    legs;
    tail;

    constructor(legs,tail){
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(this.legs);
        console.log(this.tail);
    }
}
class human extends animal{
    nationality;
    constructor(legs,tail,nationality){
        super(legs,tail); // super is used to access the parent class.
        this.nationality = nationality;
    }

}
let call = new animal(1,false);
call.display();
let call1 = new human(4,false,"Indian");
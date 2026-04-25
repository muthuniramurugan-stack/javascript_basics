//this is a special keyword that refers to the current object (the object that is executing or calling the method).
let car = {
    name:"Muthu",
    brand:"Tata",
    price:15,
    onprice(price){
        return this.price+2;
    }
};
console.log(car.onprice(10));
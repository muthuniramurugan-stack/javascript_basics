// An array is a special variable used to store multiple values in a single variable.
// this is differ from c and java because we can able to store same type of values in an array in c and java
// but in js we can able to store different type of data 

// creation of array 
// metgod 01 Array Literal Using square brackets []
let arr = [1,2,3,4,5];
console.log(arr);

// method 02 
let a = new Array();
a=[1,2,3,4,5,6,7,8];
console.log(a);

// method 02
let b = [];
b=[2,3,4,5,6,7];
console.log(b);

// method 04
let ab = [];

ab[0] = 10;
ab[1] = 20;
ab[2] = 30;

console.log(ab);

// to access elements
let veges = ['Carrot', 'Beetroot' , 'Potato'];
console.log(veges[1]);

// we can also able to add function inside the array
let all = ['hello', 'hi', 10,20,function add(a,b){ return a+b},'bat','ball'];
console.log(all[4] (1,3));
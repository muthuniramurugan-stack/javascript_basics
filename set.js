/*A Set is a built-in object used to store unique values.
Duplicate values are not allowed. */
let set = new Set();
set.add('hello')
   .add('hello')  // here duplicates are not allowed 
   .add('byee');
console.log(set);
// to check wheather the key is present or not
console.log(set.has(1));
// to check how many elements are there
console.log(set.size)
// to clear all the elements in the set
set.clear();
// to iterate set
for(s of set){
    console.log(s);
}
//A Map is a built-in object used to store data in key–value pairs.
//It is similar to an object, but more flexible.
/*Any datatype as key ,Keys can be number, string, boolean, object, array.
Maintains insertion order Stores data in the same order you add it.
Map does not require continuous keys. 
*/
let map = new Map();
map.set(1,'hello')  // to add values
   .set(2,'hii')
   .set(5,'bye')
   .set(true,"Boolean");
console.log(map);

// to delete all values
map.clear();
// to delete particular element
map.delete(1);
// to find the size of the map
console.log(map.size);
// to print all the keys
for(key of map.keys()){
    console.log(key);
}

// to print values
for(key of map.values()){
    console.log(key);
}
//map.has() is used to check whether a key exists in a Map.
console,log(map.has(1));

/*| Feature   | Object                             | Map                                   |
| --------- | ---------------------------------- | ------------------------------------- |
| Structure | key-value pairs                    | key-value pairs                       |
| Key type  | mostly string/symbol               | any datatype                          |
| Order     | not guaranteed traditionally       | insertion order maintained            |
| Size      | `Object.keys(obj).length`          | `map.size`                            |
| Iteration | needs `Object.keys()` / `for...in` | direct `for...of`                     |
| Methods   | fewer built-in methods             | `set()`, `get()`, `has()`, `delete()` |
 */
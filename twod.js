// A two-dimensional array (2D array) is an array that contains other arrays inside it.
//Think of it like a table (rows and columns).
let arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(arr);
// to access elements from an array we need to give the index of row and column
console.log(arr[0][1]);
// to print the values one by one
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}
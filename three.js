// check if an object is an array

function checkArray(arr){
  return Array.isArray(arr);
}
let arr=[2,3,4];
console.log(typeof arr); // object
console.log(checkArray(arr));

let obj={3:"apple"};
console.log(checkArray(obj));
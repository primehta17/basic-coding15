// check if an object is an array

function checkArray(arr){
  return Array.isArray(arr);
}

console.log(checkArray([2,3,4]));

let obj={3:"apple"};
console.log(checkArray(obj));
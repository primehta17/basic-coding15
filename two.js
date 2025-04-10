// Append an Object to an Array

function insertObject(arr, obj){
  return  arr = [...arr,obj];
}

function pushObj(arr, obj){
    arr.push(obj);
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
console.log(insertObject(array, object));
pushObj(array, object);

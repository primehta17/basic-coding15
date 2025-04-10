// JavaScript Classes

class Person{
    constructor(name,message){
        this.name=name;
        this.message=message;
    }

    greet(){
        console.log(this.name,this.message);
    }
}

let person1 = new Person('priyanka','keep doing well');

person1.greet();


// Create Objects Without Classes
// create an object 'person' without a formal class definition
let person ={
    name:"Mehta",
    age:30,
    greet:function(){
        console.log(this.name,this.age);
    }
}

// call the greet() method on the person object
person.greet();
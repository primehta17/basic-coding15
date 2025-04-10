// JavaScript Class Inheritance

class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

class Student extends Person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}
let student1 = new Student('Jack',29);

student1.greet();
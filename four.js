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